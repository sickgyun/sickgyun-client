'use client';

import styled from '@emotion/styled';
import { Button, Input, Stack, Text, Textarea } from '@sickgyun/ui';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import Header from '@/components/common/Header';
import QnaCategory from '@/components/qna/QnaPostCategory';
import { QNA_WRITE_CATEGORY } from '@/constants/qna-write';
import { useCreateQna } from '@/hooks/api/qna/useCreateQna';
import type { CreateQnaRequest } from '@/hooks/api/qna/useCreateQna';
import type { Qna } from '@/types/qna';

const QnaWritePage = () => {
  const router = useRouter();
  const { mutate: createQnaMutate } = useCreateQna();

  const [category, setCategory] = useState({
    id: 3,
    title: '',
  });
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(3);

  const {
    register,
    handleSubmit: createQnaWriteSubmit,
    setValue,
  } = useForm<CreateQnaRequest>();

  useEffect(() => {
    setValue('category', category.title);
  }, [category.title, setValue]); // 선택된 카테고리가 들어감

  const onCreateQna: SubmitHandler<CreateQnaRequest> = (data) => {
    createQnaMutate(data);
    router.push('/qna');
  };

  return (
    <>
      <Header />
      <StyledQnaWritePage>
        <QnaWriteCategory>
          <Text fontType="h4" style={{ fontWeight: 'bold' }}>
            카테고리
          </Text>
          <Stack direction="horizontal" spacing={10}>
            {QNA_WRITE_CATEGORY.map((category) => (
              <QnaCategory
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
        </QnaWriteCategory>
        <form onSubmit={createQnaWriteSubmit(onCreateQna)}>
          <input type="hidden" {...register('category')} />
          <Stack style={{ padding: '22px' }} spacing={10}>
            <Input
              placeholder="제목을 작성해 주세요"
              style={{ border: 'none', fontSize: '17px' }}
              {...register('title')}
            />
            <Textarea
              placeholder="내용을 작성해 주세요"
              minHeight="350px"
              style={{ border: 'none' }}
              {...register('content')}
            />
          </Stack>
          <Stack style={{ padding: '0 22px 22px 0' }} align="flex-end" spacing={0}>
            <Button width="180px" type="submit">
              등록하기
            </Button>
          </Stack>
        </form>
      </StyledQnaWritePage>
    </>
  );
};

export default QnaWritePage;

const StyledQnaWritePage = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 36px;
  width: 80%;
  min-height: 80vh;
  border-radius: 15px;
`;

const QnaWriteCategory = styled.div`
  width: 100%;
  height: 115px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
