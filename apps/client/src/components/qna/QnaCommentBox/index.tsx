import styled from '@emotion/styled';
import {
  IconArrowDropDownFill,
  IconArrowDropUpFill,
  IconSettingFill,
} from '@seed-design/icon';
import { Button, Flex, Text, Textarea } from '@sickgyun/ui';
import { SecondaryButton } from '@sickgyun/ui/src/Button/SecondaryButton';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import CreateQnaRecommentBox from '../CreateQnaRecommentBox';
import QnaCommentModifyBox from '../QnaCommentModifyBox';
import QnaRecommentBox from '../QnaRecommentBox';
import type { GetQnaCommentListResponse } from '@/hooks/api/qna/useGetQnaCommentList';
import type { UpdateQnaCommentRequest } from '@/hooks/api/qna/useUpdateQnaComment';
import { useUpdateQnaComment } from '@/hooks/api/qna/useUpdateQnaComment';
import { useOutsideClick } from '@/hooks/common/useOutsideClick';
import { useUser } from '@/hooks/common/useUser';
import { timeAgo } from '@/utils/timeAgo';

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
          <Flex align="center">
            <Text style={{ marginRight: '3px' }}>{comment.userResponse?.name}</Text>
            <Text fontType="p2" color="gray600" style={{ marginRight: '3px' }}>
              ({comment?.userResponse.cardinal}기
            </Text>
            <Text fontType="p2" color="gray600">
              {comment?.userResponse.isGraduated ? '졸업생' : '재학생'})
            </Text>
          </Flex>
          <Text fontType="p3" color="gray500" style={{ marginLeft: '8px' }}>
            {timeAgo(comment?.createTime)}
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
        <form onSubmit={updateQnaCommentSubmit(onUpdateQnaCommentSubmit)}>
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
      ) : (
        <Text fontType="p1">{comment?.content}</Text>
      )}

      <StyledQnaRecommentLayout>
        <Text fontType="p2" color="primary" onClick={handleOpenQnaRecommentCreateBox}>
          답글
        </Text>
        {comment?.children.length > 0 && (
          <StyledQnaRecomment onClick={handleOpenQnaRecommentList}>
            <Text fontType="p2" color="gray600" style={{ marginRight: '2px' }}>
              답글
            </Text>
            <Flex align="center">
              <Text fontType="p2" color="gray600">
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
            <QnaRecommentBox key={recomment.id} parentId={comment.id} {...recomment} />
          ))}
        </Flex>
      )}
    </StyledQnaCommentBox>
  );
};

export default QnaCommentBox;

const StyledQnaCommentBox = styled.div``;

const StyledQnaCommentHeader = styled.div`
  padding-top: 8px;
  padding-bottom: 4px;
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
  margin-top: 8px;
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
