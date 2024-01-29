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
import { useOverlay } from '@toss/use-overlay';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import StudentProfileDeleteConfirm from '../StudentProfileDeleteConfirm';
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

const StudentProfileUpdateModal = ({
  isOpen,
  onClose,
}: StudentProfileUpdateModalProps) => {
  const overlay = useOverlay();
  const { register, handleSubmit: handleUpdateStudentProfileSubmit } =
    useForm<StudentProfileUpdateFormInput>();

  const { studentProfile } = useStudentProfile();

  const { mutate: updateStudentProfileMutate } = useUpdateStudentProfileMutation();
  const { mutate: deleteStudentProfileMutate } = useDeleteStudentProfileMutation();

  const onUpdateStudentProfileSubmit: SubmitHandler<StudentProfileUpdateFormInput> = (
    data
  ) => {
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

  const openStudentProfileDeleteConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <StudentProfileDeleteConfirm
        isOpen={isOpen}
        onClose={close}
        onDelete={() => {
          handleDeleteStudentProfile();
          // TODO: close와 onClose 명확한 구분
          close();
          onClose();
        }}
      />
    ));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="550px">
      <ModalContent
        tag="form"
        onSubmit={handleUpdateStudentProfileSubmit(onUpdateStudentProfileSubmit)}
      >
        <ModalHeader>
          <Text fontType="h3">프로필 수정</Text>
          <ModalCloseButton onClose={onClose} />
        </ModalHeader>
        <ModalBody>
          <Stack spacing={16} style={{ width: '100%' }}>
            <Stack direction="horizontal" spacing={8}>
              <Input
                label="이름"
                value={studentProfile.name}
                placeholder="이름을 입력해주세요."
                disabled
              />
              <Input
                label="깃허브 아이디"
                defaultValue={studentProfile.githubId}
                placeholder="깃허브 아이디를 입력해주세요."
                {...register('githubId')}
              />
            </Stack>
            <Input
              label="이메일"
              defaultValue={studentProfile.email}
              placeholder="이메일을 적어주세요."
              {...register('email')}
            />
            <Input
              label="소개 말"
              defaultValue={studentProfile.bio}
              placeholder="소개 말을 적어주세요."
              {...register('bio')}
            />
            <Select label="포지션" {...register('position')}>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="DEVOPS">데브옵스</option>
              <option value="APP">앱</option>
              <option value="DESIGNER">디자이너</option>
            </Select>
            {studentProfile.isGraduate && (
              <Input
                label="회사"
                placeholder="회사명을 입력해주세요."
                {...register('company')}
              />
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Stack direction="horizontal" spacing={8} style={{ width: '100%' }}>
            <Button styleType="secondary" onClick={openStudentProfileDeleteConfirm}>
              내 프로필 삭제
            </Button>
            <Button type="submit">수정</Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentProfileUpdateModal;
