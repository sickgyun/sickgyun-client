import styled from '@emotion/styled';
import { colors } from '@sickgyun/design-token';
import { Button, Flex, Stack, Text, Textarea } from '@sickgyun/ui';
import { useForm } from 'react-hook-form';
import { QNA_COMMENT } from '@/constants/qna';

type QnaCommentCreateFormInput = {
  comment: string;
};

const QnaComment = () => {
  const {
    register,
    handleSubmit: createQnaCommentSubmit,
    reset,
  } = useForm<QnaCommentCreateFormInput>();

  const onCreateQnaCommentSubmit = (data: QnaCommentCreateFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <StyledQnaComment>
      <Text fontType="body1">답변 1</Text>
      <form onSubmit={createQnaCommentSubmit(onCreateQnaCommentSubmit)}>
        <Textarea {...register('comment', { required: true })} />
        <Flex justify="flex-end" style={{ marginBottom: '10px' }}>
          <Button type="submit" size="small" style={{ marginTop: '10px' }}>
            등록
          </Button>
        </Flex>
      </form>
      {QNA_COMMENT.map((comment) => (
        <>
          <Stack
            key={comment.id}
            style={{
              borderTop: `1px solid ${colors.gray300}`,
              paddingTop: '10px',
            }}
            direction="horizontal"
            spacing={10}
          >
            <Text fontType="p2">{comment.name}</Text>
            <Text fontType="p2" color="gray500">
              {comment.createAt} 일전
            </Text>
          </Stack>
          <Text>{comment.contents}</Text>
        </>
      ))}
    </StyledQnaComment>
  );
};

export default QnaComment;

const StyledQnaComment = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
`;
