import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from '@chakra-ui/react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useCreateStudentProfileMutation } from '@/hooks/api/student-profile/useCreateStudentProfileMutation';
import { useUserInformation } from '@/store/UserInformation';

type StudentProfileCreateFormInput = {
  githubId: string;
  email: string;
  bio: string;
  position: string;
  company: string;
};

type StudentProfileCreateModalProps = ModalProps;

const StudentProfileCreateModal = ({
  isOpen,
  onClose,
}: StudentProfileCreateModalProps) => {
  const { userInformation } = useUserInformation();
  const { register, handleSubmit: handleCreateStudentSubmit } =
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
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleCreateStudentSubmit(onCreateStudentProfileSubmit)}
      >
        <ModalHeader>
          <Text as="span">선배 프로필 등록</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column" gap="16px">
            <Flex gap="8px">
              <Input
                value={userInformation.name}
                placeholder="이름을 입력해주세요."
                disabled
              />
              <Input
                defaultValue={userInformation.githubId}
                placeholder="깃허브 아이디를 입력해주세요."
                {...register('githubId')}
              />
            </Flex>
            <Input
              defaultValue={userInformation.email}
              placeholder="이메일을 적어주세요."
              {...register('email')}
            />
            <Input placeholder="소개 말을 적어주세요." {...register('bio')} />
            <Select size="md" {...register('position')}>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="DEVOPS">데브옵스</option>
              <option value="APP">앱</option>
              <option value="DESIGNER">디자이너</option>
            </Select>
            <Input placeholder="회사명을 입력해주세요." {...register('company')} />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">등록</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentProfileCreateModal;
