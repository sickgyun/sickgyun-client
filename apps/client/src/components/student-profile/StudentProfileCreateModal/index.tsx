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
import { useCreateStudentProfileMutation } from '@/hooks/api/student-profile/useCreateStudentProfileMutation';
import { useUserInformation } from '@/store/UserInformation';

type StudentProfileCreateFormInput = {
  githubId?: string;
  email?: string;
  bio?: string;
  position: string;
  company?: string;
};

const StudentProfileCreateModal = ({ isOpen, onClose }: ModalProps) => {
  const { userInformation } = useUserInformation();
  const { register, handleSubmit: handleCreateStudentProfileSubmit } =
    useForm<StudentProfileCreateFormInput>();

  const { mutate: createStudentProfileMutate } = useCreateStudentProfileMutation();

  const onCreateStudentProfileSubmit: SubmitHandler<StudentProfileCreateFormInput> = (
    data
  ) => {
    const createStudentProfileRequstData = {
      userCode: userInformation.userCode,
      profileUrl: userInformation.profileUrl,
      name: userInformation.name,
      cardinal: userInformation.cardinal,
      isGraduate: userInformation.isGraduate,
      bio: data.bio,
      githubId: data.githubId,
      email: data.email,
      position: data.position,
      company: data.company,
    };

    createStudentProfileMutate(createStudentProfileRequstData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="550px">
      <ModalContent
        tag="form"
        onSubmit={handleCreateStudentProfileSubmit(onCreateStudentProfileSubmit)}
      >
        <ModalHeader>
          <Text fontType="h2">프로필 등록</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <Stack spacing={16} style={{ width: '100%' }}>
            <Stack direction="horizontal" spacing={8}>
              <Input
                label="이름"
                value={userInformation.name}
                placeholder="이름을 입력해주세요."
                disabled
              />
              <Input
                label="깃허브 아이디"
                defaultValue={userInformation.githubId}
                placeholder="깃허브 아이디를 입력해주세요."
                {...register('githubId')}
              />
            </Stack>
            <Input
              label="이메일"
              defaultValue={userInformation.email}
              placeholder="이메일을 적어주세요."
              {...register('email')}
            />
            <Input
              label="소개 말"
              placeholder="소개 말을 적어주세요."
              {...register('bio')}
            />
            <Select label="포지션" {...register('position')}>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="EMBEDDED">임베디드</option>
              <option value="GAME">게임</option>
              <option value="ETC">기타</option>
            </Select>
            {userInformation.isGraduate && (
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

export default StudentProfileCreateModal;
