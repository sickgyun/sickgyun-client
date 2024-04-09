import QnaCommentDeleteConfirm from '@/components/QnaCommentDeleteConfirm';
import styled from '@emotion/styled';
import { useOverlay } from '@toss/use-overlay';
import React from 'react';

export type QnaCommentModifyBoxProps = {
  id: number;
};

const QnaCommentModifyBox = ({ id }: QnaCommentModifyBoxProps) => {
  const overlay = useOverlay();

  const handleEditQnaComment = () => {};

  const openDeleteQnaCommentConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <QnaCommentDeleteConfirm isOpen={isOpen} onClose={close} id={Number(id)} />
    ));
  };

  return (
    <StyledQnaCommentModifyBox>
      <StyledQnaCommentModifyButton onClick={handleEditQnaComment}>
        수정하기
      </StyledQnaCommentModifyButton>
      <StyledQnaCommentModifyButton onClick={openDeleteQnaCommentConfirm}>
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
  height: 80px;
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
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
