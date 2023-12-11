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
import { useOverlay } from '@toss/use-overlay';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import StudentProfileDeleteDialog from '../StudentProfileDeleteDialog';
import { useDeleteStudentProfileMutation } from '@/hooks/api/student-profile/useDeleteStudentProfileMutation';
import { useUpdateStudentProfileMutation } from '@/hooks/api/student-profile/useUpdateStudentProfileMutation';
import { useStudentProfile } from '@/store/StudentProfile';

type StudentProfileUpdateFormInput = {
  githubId?: string;
  email?: string;
  bio?: string;
  position: string;
  company?: string;
};

type StudentProfileUpdateModalProps = ModalProps;

const StudentProfileUpdateModal = ({ isOpen, onClose }: StudentProfileUpdateModalProps) => {
  const overlay = useOverlay();
  const { register, handleSubmit: handleUpdateStudentProfileSubmit } =
    useForm<StudentProfileUpdateFormInput>();

  const { studnetProfile } = useStudentProfile();

  const { mutate: updateStudentProfileMutate } = useUpdateStudentProfileMutation();
  const { mutate: deleteStudentProfileMutate } = useDeleteStudentProfileMutation();

  const onUpdateStudentProfileSubmit: SubmitHandler<StudentProfileUpdateFormInput> = data => {
    const updateStudentProfileRequstData = {
      githubId: data.githubId,
      email: data.email,
      bio: data.bio,
      position: data.position,
      company: data.company,
    };

    updateStudentProfileMutate(updateStudentProfileRequstData);
    onClose();
  };

  const handleDeleteStudentProfile = () => {
    deleteStudentProfileMutate();
  };

  const openStudentProfileDeleteDialog = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileDeleteDialog
        isOpen={isOpen}
        onClose={close}
        onDelete={() => {
          handleDeleteStudentProfile();
          // 다이로그 닫기
          close();
          // 모달 닫기
          onClose();
        }}
      />
    ));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleUpdateStudentProfileSubmit(onUpdateStudentProfileSubmit)}
      >
        <ModalHeader>
          <Text as="span">프로필 수정</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column" gap="16px">
            <Flex gap="8px">
              <Input value={studnetProfile.name} placeholder="이름을 입력해주세요." disabled />
              <Input
                defaultValue={studnetProfile.githubId}
                placeholder="깃허브 아이디를 입력해주세요."
                {...register('githubId')}
              />
            </Flex>
            <Input
              defaultValue={studnetProfile.email}
              placeholder="이메일을 적어주세요."
              {...register('email')}
            />
            <Input
              defaultValue={studnetProfile.bio}
              placeholder="소개 말을 적어주세요."
              {...register('bio')}
            />
            <Select size="md" {...register('position')}>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="DEVOPS">데브옵스</option>
              <option value="APP">앱</option>
              <option value="DESIGNER">디자이너</option>
            </Select>
            {studnetProfile.isGraduate && (
              <Input placeholder="회사명을 입력해주세요." {...register('company')} />
            )}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap="12px">
            <Button onClick={openStudentProfileDeleteDialog} color="white" colorScheme="red">
              내 프로필 삭제
            </Button>
            <Button type="submit">수정</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentProfileUpdateModal;
