import styled from '@emotion/styled';
import { IconSettingFill } from '@seed-design/icon';
import { Button, Flex, Text, Textarea } from '@sickgyun/ui';
import { SecondaryButton } from '@sickgyun/ui/src/Button/SecondaryButton';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import QnaCommentModifyBox from '../QnaCommentModifyBox';
import type {
  GetQnaCommentListResponse,
  UserResponse,
} from '@/hooks/api/qna/useGetQnaCommentList';
import type { UpdateQnaCommentRequest } from '@/hooks/api/qna/useUpdateQnaComment';
import { useUpdateQnaComment } from '@/hooks/api/qna/useUpdateQnaComment';
import { useOutsideClick } from '@/hooks/common/useOutsideClick';
import { useUser } from '@/hooks/common/useUser';

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
  const { mutate: updateQnaReCommentMutate } = useUpdateQnaComment(id);

  const [isOpenQnaReCommentEditModal, setIsOpenQnaReCommentEditModal] = useState(false);
  const [isOpenQnaEditBox, setIsOpenQnaEditBox] = useState(false);

  const { register, handleSubmit: updateQnaReCommentSubmit } =
    useForm<UpdateQnaCommentRequest>();

  const handleQnaReCommentEditModal = () => {
    setIsOpenQnaReCommentEditModal((prev) => !prev);
  };

  const openReCommentModifyRef = useOutsideClick(
    isOpenQnaReCommentEditModal,
    setIsOpenQnaReCommentEditModal
  );

  const handleCloseQnaReCommentEditModal = () => {
    setIsOpenQnaEditBox(false);
  };

  const onUpdateQnaReCommentSubmit: SubmitHandler<UpdateQnaCommentRequest> = (data) => {
    const reCommentData = {
      ...data,
      parentId,
    };

    updateQnaReCommentMutate(reCommentData);
    setIsOpenQnaEditBox(false);
  };

  return (
    <StyledQnaRecommentBox>
      <Flex direction="column" style={{ marginLeft: '30px', width: '100%' }}>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Text fontType="p1">
              {userResponse?.name}
              <Text fontType="p2" color="gray600" style={{ marginLeft: '3px' }}>
                <Text fontType="p2" color="gray600" style={{ marginRight: '3px' }}>
                  ({userResponse?.cardinal}기
                </Text>
                {userResponse?.isGraduated ? '졸업생' : '재학생'})
              </Text>
            </Text>
            <Text fontType="p2" color="gray500" style={{ marginLeft: '8px' }}>
              {5}일 전
            </Text>
          </Flex>
          <StyledSettingButtonLayout ref={openReCommentModifyRef}>
            {user.id === userResponse?.id && (
              <StyledSettingButton onClick={() => handleQnaReCommentEditModal()} />
            )}
            {isOpenQnaReCommentEditModal && (
              <QnaCommentModifyBox
                id={id}
                setIsOpenQnaEditBox={setIsOpenQnaEditBox}
                setIsOpenQnaCommentEditModal={setIsOpenQnaReCommentEditModal}
              />
            )}
          </StyledSettingButtonLayout>
        </Flex>
        {isOpenQnaEditBox ? (
          isOpenQnaEditBox && (
            <form
              onSubmit={updateQnaReCommentSubmit(onUpdateQnaReCommentSubmit)}
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
                  onClick={handleCloseQnaReCommentEditModal}
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
