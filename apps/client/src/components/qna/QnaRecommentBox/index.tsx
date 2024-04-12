import styled from '@emotion/styled';
import { IconSettingFill } from '@seed-design/icon';
import { Button, Flex, Text, Textarea } from '@sickgyun/ui';
import { useUser } from '@/hooks/common/useUser';
import {
  GetQnaCommentListResponse,
  UserResponse,
} from '@/hooks/api/qna/useGetQnaCommentList';
import { useOutsideClick } from '@/hooks/common/useOutsideClick';
import { useState } from 'react';
import QnaCommentModifyBox from '../QnaCommentModifyBox';
import {
  UpdateQnaCommentRequest,
  useUpdateQnaComment,
} from '@/hooks/api/qna/useUpdateQnaComment';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SecondaryButton } from '@sickgyun/ui/src/Button/SecondaryButton';

type QnaRecommentBoxProps = {
  parentId: number;
  id: number;
  content: string;
  userResponse: UserResponse;
} & GetQnaCommentListResponse;

const QnaRecommentBox = ({
  parentId,
  id,
  content,
  userResponse,
}: QnaRecommentBoxProps) => {
  const { user } = useUser();
  const { mutate: updateQnaCommentMutate } = useUpdateQnaComment(id);

  const [isOpenQnaCommentEditModal, setIsOpenQnaCommentEditModal] = useState(false);
  const [isOpenQnaEditBox, setIsOpenQnaEditBox] = useState(false);

  const { register, handleSubmit: updateQnaCommentSubmit } =
    useForm<UpdateQnaCommentRequest>();

  const handleQnaCommentEditModal = () => {
    setIsOpenQnaCommentEditModal((prev) => !prev);
  };

  const openCommentModifyRef = useOutsideClick(
    isOpenQnaCommentEditModal,
    setIsOpenQnaCommentEditModal
  );

  const handleCloseQnaCommentEditModal = () => {
    setIsOpenQnaEditBox(false);
  };

  const onUpdateQnaCommentSubmit: SubmitHandler<UpdateQnaCommentRequest> = (data) => {
    const reCommentData = {
      ...data,
      parentId,
    };

    updateQnaCommentMutate(reCommentData);
    setIsOpenQnaEditBox(false);
  };

  return (
    <StyledQnaRecommentBox>
      <Flex direction="column" style={{ marginLeft: '30px', width: '100%' }}>
        <Flex align="center" justify="space-between">
          <Flex>
            <Text fontType="p2">
              {userResponse?.name}
              <Text fontType="p3" style={{ marginLeft: '3px' }}>
                ({userResponse?.email})
              </Text>
            </Text>
            <Text fontType="p3" color="gray500" style={{ marginLeft: '8px' }}>
              {5}일 전
            </Text>
          </Flex>
          <StyledSettingButtonLayout ref={openCommentModifyRef}>
            {user.id === userResponse?.id && (
              <StyledSettingButton onClick={() => handleQnaCommentEditModal()} />
            )}
            {isOpenQnaCommentEditModal && (
              <QnaCommentModifyBox
                id={id}
                setIsOpenQnaEditBox={setIsOpenQnaEditBox}
                setIsOpenQnaCommentEditModal={setIsOpenQnaCommentEditModal}
              />
            )}
          </StyledSettingButtonLayout>
        </Flex>
        {isOpenQnaEditBox ? (
          isOpenQnaEditBox && (
            <form
              onSubmit={updateQnaCommentSubmit(onUpdateQnaCommentSubmit)}
              style={{ marginTop: '4px' }}
            >
              <Textarea
                minHeight="120px"
                {...register('content', { required: true })}
                defaultValue={content}
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
                <Button
                  type="submit"
                  size="small"
                  width="70px"
                  style={{ height: '38px' }}
                >
                  수정
                </Button>
              </Flex>
            </form>
          )
        ) : (
          <Text fontType="p2" style={{ marginTop: '6px', marginBottom: '15px' }}>
            {content}
          </Text>
        )}
      </Flex>
    </StyledQnaRecommentBox>
  );
};

export default QnaRecommentBox;

const StyledQnaRecommentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  padding-top: 8px;
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
