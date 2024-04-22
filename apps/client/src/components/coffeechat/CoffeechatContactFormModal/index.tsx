import styled from '@emotion/styled';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
} from '@sickgyun/ui';
import { useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { USER_QUERY_KEY } from '@/hooks/api/user/useGetUser';
import type { UpdateUserContactRequest } from '@/hooks/api/user/useUpdateUserContact';
import { useUpdateUserContact } from '@/hooks/api/user/useUpdateUserContact';
import { useUser } from '@/hooks/common/useUser';
import { useToast } from '@/libs/toast';

type CoffeechatContactFormModalProps = ModalProps;

const CoffeechatContactFormModal = ({
  isOpen,
  onClose,
}: CoffeechatContactFormModalProps) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { register, handleSubmit: handleUpdateUserContactSubmit } =
    useForm<UpdateUserContactRequest>();
  const { user } = useUser();
  const { mutate: updateUserContactMutate } = useUpdateUserContact({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      onClose();
    },
  });

  const onUpdateUserContact: SubmitHandler<UpdateUserContactRequest> = (data) => {
    const { phoneNumber, instagramId, kakaoId } = data;

    if (isEmpty(phoneNumber) && isEmpty(instagramId) && isEmpty(kakaoId)) {
      toast.error('연락처를 최소 1개 이상 입력해야해요');
      return;
    }

    updateUserContactMutate(data);
  };

  return (
    <StyledCoffeechatContactFormModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Stack spacing={8}>
          <Text fontType="h2">연락처 {user.hasNotContact ? '추가' : '수정'}</Text>
          <Text fontType="p2" color="gray600">
            연락처를 추가해야 커피챗 요청 후에 매끄럽게 약속을 잡을 수 있어요!
          </Text>
        </Stack>
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody>
        <Stack direction="vertical" spacing={16} style={{ width: '100%' }}>
          <Input
            label="전화번호"
            defaultValue={user.phoneNumber}
            placeholder="전화번호를 입력해주세요."
            {...register('phoneNumber')}
          />
          <Input
            label="인스타그램 아이디"
            defaultValue={user.instagramId}
            placeholder="인스타그램 아이디를 입력해주세요."
            {...register('instagramId')}
          />
          <Input
            label="카카오톡 아이디"
            defaultValue={user.kakaoId}
            placeholder="카카오톡 아아디를 입력해주세요."
            {...register('kakaoId')}
          />
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Stack direction="vertical" align="center" spacing={8} style={{ width: '100%' }}>
          <Text fontType="p2" color="gray500">
            연락처를 최소 1개 이상 입력해야해요
          </Text>
          <Button
            onClick={handleUpdateUserContactSubmit(onUpdateUserContact)}
            size="large"
          >
            {user.hasNotContact ? '추가하기' : '수정하기'}
          </Button>
        </Stack>
      </ModalFooter>
    </StyledCoffeechatContactFormModal>
  );
};

export default CoffeechatContactFormModal;

const StyledCoffeechatContactFormModal = styled(Modal)`
  width: 550px;
`;
