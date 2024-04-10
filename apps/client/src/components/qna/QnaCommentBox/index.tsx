import { useUser } from '@/hooks/common/useUser';
import styled from '@emotion/styled';
import { IconSettingFill } from '@seed-design/icon';
import { Button, Flex, Text, Textarea } from '@sickgyun/ui';
import { useState } from 'react';
import QnaCommentModifyBox from '../QnaCommentModifyBox';
import { useOutsideClick } from '@/hooks/common/useOutsideClick';
import { SecondaryButton } from '@sickgyun/ui/src/Button/SecondaryButton';
import {
  UpdateQnaCommentRequest,
  useUpdateQnaComment,
} from '@/hooks/api/qna/useUpdateQnaComment';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetQnaCommentListResponse } from '@/hooks/api/qna/useGetQnaCommentList';

const QnaCommentBox = (comment: GetQnaCommentListResponse) => {
  const { user } = useUser();
  const { mutate: updateQnaCommentMutate } = useUpdateQnaComment(comment.id);

  const [isOpenQnaCommentEditModal, setIsOpenQnaCommentEditModal] = useState(false);
  const [isOpenQnaEditBox, setIsOpenQnaEditBox] = useState(false);

  const openCommentModifyRef = useOutsideClick(
    isOpenQnaCommentEditModal,
    setIsOpenQnaCommentEditModal
  );

  const { register, handleSubmit: updateQnaCommentSubmit } =
    useForm<UpdateQnaCommentRequest>();

  const onUpdateQnaCommentSubmit: SubmitHandler<UpdateQnaCommentRequest> = (data) => {
    updateQnaCommentMutate(data);
    setIsOpenQnaEditBox(false);
  };

  const handleQnaCommentEditModal = () => {
    setIsOpenQnaCommentEditModal((prev) => !prev);
  };

  const handleCloseQnaCommentEditModal = () => {
    setIsOpenQnaEditBox(false);
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
            <StyledSettingButton onClick={() => handleQnaCommentEditModal()} />
          )}
          {isOpenQnaCommentEditModal && (
            <QnaCommentModifyBox
              id={comment.id}
              setIsOpenQnaEditBox={setIsOpenQnaEditBox}
              setIsOpenQnaCommentEditModal={setIsOpenQnaCommentEditModal}
            />
          )}
        </StyledSettingButtonContainer>
      </StyledQnaCommentHeader>
      {isOpenQnaEditBox ? (
        <StyledQnaEditBoxLayout>
          <form onSubmit={updateQnaCommentSubmit(onUpdateQnaCommentSubmit)}>
            <Textarea
              minHeight="120px"
              {...register('content', { required: true })}
              defaultValue={comment.content}
            />
            <Flex align="center" justify="flex-end" style={{ marginTop: '7px' }}>
              <SecondaryButton
                size="small"
                width="70px"
                style={{ height: '38px', marginRight: '5px' }}
                onClick={handleCloseQnaCommentEditModal}
              >
                취소
              </SecondaryButton>
              <Button type="submit" size="small" width="70px" style={{ height: '38px' }}>
                수정
              </Button>
            </Flex>
          </form>
        </StyledQnaEditBoxLayout>
      ) : (
        <Text fontType="p2">{comment?.content}</Text>
      )}
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

const StyledQnaEditBoxLayout = styled.div`
  margin-top: 5px;
`;
