'use client';

import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Stack, Textarea } from '@sickgyun/ui';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Header from '@/components/common/Header';
import QnaWriteCategory from '@/components/qna-posting/QnaWriteCategory';
import { checkedCategory } from '@/store/Qna';

type QnaWriteFormProps = {
  title: string;
  contents: string;
  categoryTitle: string;
};

const schema = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  contents: yup.string().required('내용을 입력해주세요.'),
  categoryTitle: yup.string(),
});

const QnaWritePage = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const handleQnaWriteSubmit = (data: QnaWriteFormProps) => {
    console.log('handleSubmit', data);
  };

  const [category] = useAtom(checkedCategory);

  useEffect(() => {
    setValue('categoryTitle', category.title);
  }, [category.title, setValue]);

  return (
    <>
      <Header />
      <StyledQnaWritePage>
        <QnaWriteCategory />
        <form onSubmit={handleSubmit(handleQnaWriteSubmit)}>
          <input type="hidden" {...register('categoryTitle')} />
          <Stack style={{ padding: '22px' }} spacing={10}>
            <Input
              placeholder="제목을 작성해 주세요"
              style={{ border: 'none' }}
              {...register('title')}
            />
            <StyledErrorMessage>{formState.errors.title?.message}</StyledErrorMessage>
            <Textarea
              placeholder="내용을 작성해 주세요"
              height="350px"
              style={{ border: 'none' }}
              {...register('contents')}
            />
            <StyledErrorMessage>{formState.errors.contents?.message}</StyledErrorMessage>
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
