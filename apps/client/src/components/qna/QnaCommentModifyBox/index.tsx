import styled from '@emotion/styled';
import type { Dispatch, SetStateAction } from 'react';
import { useDeleteQnaComment } from '@/hooks/api/qna/useDeleteQnaComment';

export type QnaCommentModifyBoxProps = {
  id: number;
  setIsOpenQnaEditBox?: Dispatch<SetStateAction<boolean>>;
  setIsOpenQnaCommentEditModal?: Dispatch<SetStateAction<boolean>>;
};

const QnaCommentModifyBox = ({
  id,
  setIsOpenQnaEditBox,
  setIsOpenQnaCommentEditModal,
}: QnaCommentModifyBoxProps) => {
  const { mutate: qnaCommentDeleteMutate } = useDeleteQnaComment(id);

  const handleEditQnaComment = () => {
    setIsOpenQnaEditBox(true);
    setIsOpenQnaCommentEditModal(false);
  };

  const handleDeleteQnaComment = () => {
    if (confirm('정말 댓글을 삭제하시겠습니까?')) qnaCommentDeleteMutate();
    setIsOpenQnaCommentEditModal(false);
  };

  return (
    <StyledQnaCommentModifyBox>
      <StyledQnaCommentModifyButton onClick={handleEditQnaComment}>
        수정하기
      </StyledQnaCommentModifyButton>
      <StyledQnaCommentModifyButton onClick={handleDeleteQnaComment}>
        삭제하기
      </StyledQnaCommentModifyButton>
    </StyledQnaCommentModifyBox>
  );
};

export default QnaCommentModifyBox;

const StyledQnaCommentModifyBox = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  margin-top: 5px;
  right: 0;
  width: 100px;
  height: 70px;
  background-color: white;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 8px;
  z-index: 3;
`;

const StyledQnaCommentModifyButton = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
