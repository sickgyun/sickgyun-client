'use client';

import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Stack, Textarea } from '@sickgyun/ui';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import Header from '@/components/common/Header';
import QnaWriteCategory from '@/components/qna-posting/QnaWriteCategory';
import { useCreateQna } from '@/hooks/api/qna/useCreateQna';
import type { CreateQnaRequest } from '@/hooks/api/qna/useCreateQna';
import { checkedCategory } from '@/store/Qna';

const QnaWriteObject = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
  category: yup.string(),
});

const QnaWritePage = () => {
  const { mutate: createQnaMutate } = useCreateQna();

  const {
    register,
    handleSubmit: createQnaWriteSubmit,
    formState,
    setValue,
  } = useForm({
    resolver: yupResolver(QnaWriteObject),
    mode: 'onSubmit',
  });

  const [category] = useAtom(checkedCategory);

  useEffect(() => {
    setValue('category', category.title);
  }, [category.title, setValue]);

  const onCreateQnaWrite: SubmitHandler<CreateQnaRequest> = (data) => {
    createQnaMutate(data);
  };

  return (
    <>
      <Header />
      <StyledQnaWritePage>
        <QnaWriteCategory />
        <form onSubmit={createQnaWriteSubmit(onCreateQnaWrite)}>
          <input type="hidden" {...register('category')} />
          <Stack style={{ padding: '22px' }} spacing={10}>
            <Input
              placeholder="제목을 작성해 주세요"
              style={{ border: 'none', fontSize: '17px' }}
              {...register('title')}
            />
            <StyledErrorMessage>{formState.errors.title?.message}</StyledErrorMessage>
            <Textarea
              placeholder="내용을 작성해 주세요"
              minHeight="350px"
              style={{ border: 'none' }}
              {...register('content')}
            />
            <StyledErrorMessage>{formState.errors.content?.message}</StyledErrorMessage>
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

const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  padding-left: 7px;
`;
