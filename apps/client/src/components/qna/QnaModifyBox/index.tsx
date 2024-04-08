import styled from '@emotion/styled';

const QnaModifyBox = () => {
  return (
    <StyledQnaModifyBox>
      <StyledModifyButton>수정하기</StyledModifyButton>
      <StyledModifyButton>삭제하기</StyledModifyButton>
    </StyledQnaModifyBox>
  );
};

export default QnaModifyBox;

const StyledQnaModifyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  margin-top: 5px;
  right: 0;
  width: 128px;
  height: 112px;
  background-color: white;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 8px;
`;

const StyledModifyButton = styled.div`
  display: flex;
  align-items: center;
  width: 112px;
  height: 48px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
