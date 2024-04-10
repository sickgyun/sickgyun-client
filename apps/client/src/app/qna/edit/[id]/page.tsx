'use client';

import styled from '@emotion/styled';
import { Button, Input, Stack, Text, Textarea } from '@sickgyun/ui';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { match } from 'ts-pattern';
import Header from '@/components/common/Header';
import QnaCategory from '@/components/qna/QnaCategory';
import { QNA_WRITE_CATEGORY } from '@/constants/qna';
import type { CreateQnaRequest } from '@/hooks/api/qna/useCreateQna';
import { useGetQnaCard } from '@/hooks/api/qna/useGetQna';
import { useUpdateQna } from '@/hooks/api/qna/useUpdateQna';
import type { Qna } from '@/types/qna';

const QnaEditPage = () => {
  const { id } = useParams();
  const { qnaCard } = useGetQnaCard(Number(id));

  const { mutate: updateQnaMutate } = useUpdateQna(Number(id));

  const categoryId = match(qnaCard?.category)
    .with('DEVELOP', () => 0)
    .with('RECRUIT', () => 1)
    .otherwise(() => 2);

  const [category, setCategory] = useState({
    id: categoryId,
    title: '',
  });
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(categoryId);

  const {
    register,
    handleSubmit: updateQnaWriteSubmit,
    setValue,
  } = useForm<CreateQnaRequest>();

  useEffect(() => {
    setValue('category', category?.title);
    setValue('title', qnaCard?.title);
    setValue('content', qnaCard?.content);
  }, [category.title, qnaCard?.title, qnaCard?.content, setValue]);

  const onCreateQna: SubmitHandler<CreateQnaRequest> = (data) => {
    updateQnaMutate(data);
  };

  return (
    <>
      <Header />
      <StyledQnaEditPage>
        <QnaEditCategoryContainer>
          <Text fontType="h4" style={{ fontWeight: 'bold' }}>
            카테고리
          </Text>
          <Stack direction="horizontal" spacing={10}>
            {QNA_WRITE_CATEGORY.map((category) => (
              <QnaCategory
                key={category.id}
                questionType={category.qnaType as Qna}
                isWriteCategory
                isActive={activeCategoryIndex === category.id}
                onClick={() => {
                  setActiveCategoryIndex(category.id);
                  setCategory({
                    id: category.id,
                    title: category.qnaType,
                  });
                }}
              />
            ))}
          </Stack>
        </QnaEditCategoryContainer>
        <form onSubmit={updateQnaWriteSubmit(onCreateQna)}>
          <input type="hidden" {...register('category')} />
          <Stack style={{ padding: '22px' }} spacing={10}>
            <Input
              placeholder="제목을 작성해 주세요"
              style={{ border: 'none', fontSize: '17px' }}
              {...register('title', { required: true })}
              defaultValue={qnaCard?.title}
            />
            <Textarea
              placeholder="내용을 작성해 주세요"
              minHeight="350px"
              style={{ border: 'none' }}
              {...register('content', { required: true })}
              defaultValue={qnaCard?.content}
            />
          </Stack>
          <Stack style={{ padding: '0 22px 22px 0' }} align="flex-end" spacing={0}>
            <Button width="180px" type="submit">
              수정하기
            </Button>
          </Stack>
        </form>
      </StyledQnaEditPage>
    </>
  );
};

export default QnaEditPage;

const StyledQnaEditPage = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 36px;
  width: 80%;
  min-height: 80vh;
  border-radius: 15px;
`;

const QnaEditCategoryContainer = styled.div`
  width: 100%;
  height: 115px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
