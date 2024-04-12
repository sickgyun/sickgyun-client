import styled from '@emotion/styled';
import {
  IconArrowDropDownFill,
  IconArrowDropUpFill,
  IconSettingFill,
} from '@seed-design/icon';
import { Button, Flex, Stack, Text, Textarea } from '@sickgyun/ui';
import { SecondaryButton } from '@sickgyun/ui/src/Button/SecondaryButton';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import QnaCommentModifyBox from '../QnaCommentModifyBox';
import type { GetQnaCommentListResponse } from '@/hooks/api/qna/useGetQnaCommentList';
import type { UpdateQnaCommentRequest } from '@/hooks/api/qna/useUpdateQnaComment';
import { useUpdateQnaComment } from '@/hooks/api/qna/useUpdateQnaComment';
import { useOutsideClick } from '@/hooks/common/useOutsideClick';
import { useUser } from '@/hooks/common/useUser';
import CreateQnaRecommentBox from '../CreateQnaRecommentBox';
import QnaRecommentBox from '../QnaRecommentBox';

const QnaCommentBox = (comment: GetQnaCommentListResponse) => {
  const { user } = useUser();
  const { mutate: updateQnaCommentMutate } = useUpdateQnaComment(comment.id);

  const [isOpenQnaCommentEditModal, setIsOpenQnaCommentEditModal] = useState(false);
  const [isOpenQnaEditBox, setIsOpenQnaEditBox] = useState(false);
  const [isOpenRecommentList, setIsOpenRecommentList] = useState(false);
  const [isOpenRecommentBox, setIsOpenRecommentBox] = useState(false);

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

  const handleOpenQnaRecommentList = () => {
    setIsOpenRecommentList((prev) => !prev);
  };

  const handleOpenQnaRecommentCreateBox = () => {
    setIsOpenRecommentBox(true);
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
        <StyledSettingButtonLayout ref={openCommentModifyRef}>
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
        </StyledSettingButtonLayout>
      </StyledQnaCommentHeader>
      {isOpenQnaEditBox ? (
        <div>
          <form
            onSubmit={updateQnaCommentSubmit(onUpdateQnaCommentSubmit)}
            style={{ marginTop: '4px' }}
          >
            <Textarea
              minHeight="120px"
              {...register('content', { required: true })}
              defaultValue={comment.content}
            />
            <Flex
              align="center"
              justify="flex-end"
              style={{ marginTop: '7px', marginBottom: '8px' }}
            >
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
        </div>
      ) : (
        <Flex direction="column">
          <Text fontType="p2" style={{ marginTop: '6px', marginBottom: '10px' }}>
            {comment?.content}
          </Text>
          <StyledQnaRecommentLayout>
            <Text fontType="p3" color="primary" onClick={handleOpenQnaRecommentCreateBox}>
              답글
            </Text>
            {comment?.children.length > 0 && (
              <StyledQnaRecomment onClick={handleOpenQnaRecommentList}>
                <Text fontType="p3" color="gray600" style={{ marginRight: '2px' }}>
                  답글
                </Text>
                <Flex align="center">
                  <Text fontType="p3" color="gray600">
                    {comment?.children.length}
                  </Text>
                  {isOpenRecommentList ? (
                    <IconArrowDropUpFill width={14} />
                  ) : (
                    <IconArrowDropDownFill width={14} />
                  )}
                </Flex>
              </StyledQnaRecomment>
            )}
          </StyledQnaRecommentLayout>
          {isOpenRecommentBox && (
            <CreateQnaRecommentBox
              parentId={comment.id}
              {...comment}
              setIsOpenRecommentBox={setIsOpenRecommentBox}
            />
          )}

          {isOpenRecommentList && (
            <Flex direction="column">
              {comment?.children.map((recomment) => (
                <QnaRecommentBox parentId={comment.id} {...recomment} />
              ))}
            </Flex>
          )}
        </Flex>
      )}
    </StyledQnaCommentBox>
  );
};

export default QnaCommentBox;

const StyledQnaCommentBox = styled.div``;

const StyledQnaCommentHeader = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const StyledSettingButtonLayout = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledSettingButton = styled(IconSettingFill)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const StyledQnaRecommentLayout = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
  margin-bottom: 8px;
`;

const StyledQnaRecomment = styled.div`
  width: 50px;
  height: 15px;
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
