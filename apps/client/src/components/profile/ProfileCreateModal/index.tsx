import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  Stack,
  Text,
} from '@sickgyun/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { CreateProfileRequest } from '@/hooks/api/profile/useCreateProfile';
import { useCreateProfile } from '@/hooks/api/profile/useCreateProfile';
import { useUser } from '@/store/User/useUser';

const ProfileCreateModal = ({ isOpen, onClose }: ModalProps) => {
  const { user } = useUser();
  const { register, handleSubmit: handleCreateProfileSubmit } =
    useForm<CreateProfileRequest>();
  const { mutate: createProfileMutate } = useCreateProfile();

  const onCreateProfile: SubmitHandler<CreateProfileRequest> = (data) => {
    const profile = { isRecruited: user.isGraduated, ...data };

    createProfileMutate(profile);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="550px" height="600px">
      <ModalContent tag="form" onSubmit={handleCreateProfileSubmit(onCreateProfile)}>
        <ModalHeader>
          <Text fontType="h2">프로필 등록</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <Stack spacing={16} style={{ width: '100%' }}>
            <Stack direction="horizontal" spacing={8}>
              <Input
                label="이름"
                value={user.name}
                placeholder="이름을 입력해주세요."
                disabled={true}
              />
              <Input
                label="이메일"
                defaultValue={user.email}
                placeholder="이메일을 적어주세요."
                disabled={true}
              />
            </Stack>
            <Input
              label="깃허브 아이디"
              placeholder="깃허브 아이디를 입력해주세요."
              {...register('githubId')}
            />
            <Input
              label="소개 말"
              placeholder="소개 말을 적어주세요."
              {...register('introduction')}
            />
            <Select label="포지션" {...register('major')}>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="EMBEDDED">임베디드</option>
              <option value="GAME">게임</option>
              <option value="ETC">기타</option>
            </Select>
            <Input
              label="포트폴리오"
              placeholder="포트폴리오 링크를 적어주세요."
              {...register('portfolioUrl')}
            />
            <Input
              label="이력서"
              placeholder="이력서 링크를 적어주세요."
              {...register('resumeUrl')}
            />
            {user.isGraduated && (
              <Input
                label="회사"
                placeholder="회사명을 입력해주세요."
                {...register('company')}
              />
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">등록</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileCreateModal;
