import { GetQnaCommentListResponse } from '@/hooks/api/qna/useGetComment';
import { useUser } from '@/hooks/common/useUser';
import styled from '@emotion/styled';
import { IconSettingFill } from '@seed-design/icon';
import { Flex, Text } from '@sickgyun/ui';
import { useState } from 'react';
import QnaCommentModifyBox from '../QnaCommentModifyBox';
import { useOutsideClick } from '@/hooks/common/useOutsideClick';

const QnaCommentBox = (comment: GetQnaCommentListResponse) => {
  const { user } = useUser();

  const [isOpenQnaCommentEditModal, setIsOpenQnaCommentEditModal] = useState(false);

  const openCommentModifyRef = useOutsideClick(
    isOpenQnaCommentEditModal,
    setIsOpenQnaCommentEditModal
  );

  const toggleQnaCommentEditModal = () => {
    setIsOpenQnaCommentEditModal((prev) => !prev);
  };

  return (
    <StyledQnaCommentBox>
      <StyledQnaCommentHeader>
        <Flex align="center">
          <Text fontType="p2">
            {comment.userResponse?.name}
            <Text fontType="p3" style={{ marginLeft: '3px' }}>
              ({comment.userResponse?.email})
            </Text>
          </Text>
          <Text fontType="p3" color="gray500" style={{ marginLeft: '8px' }}>
            {5}일 전
          </Text>
        </Flex>
        <StyledSettingButtonContainer ref={openCommentModifyRef}>
          {user.id === comment.userResponse.id && (
            <StyledSettingButton onClick={() => toggleQnaCommentEditModal()} />
          )}
          {isOpenQnaCommentEditModal && <QnaCommentModifyBox id={comment.id} />}
        </StyledSettingButtonContainer>
      </StyledQnaCommentHeader>
      <Text fontType="p2">{comment?.content}</Text>
    </StyledQnaCommentBox>
  );
};

export default QnaCommentBox;

const StyledQnaCommentBox = styled.div``;

const StyledQnaCommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  padding-top: 10px;
`;

const StyledSettingButtonContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledSettingButton = styled(IconSettingFill)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
