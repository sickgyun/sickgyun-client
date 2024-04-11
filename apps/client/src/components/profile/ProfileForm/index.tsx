import { Input, Select, Stack, Textarea } from '@sickgyun/ui';
import type { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import ProfileImageUploader from '../ProfileImageUploader';
import type { Profile, ProfileFormType } from '@/types/profile';
import type { User } from '@/types/user';

type ProfileFormProps = {
  user: User;
  defaultValues?: Profile;
  setValue: UseFormSetValue<ProfileFormType>;
  register: UseFormRegister<ProfileFormType>;
  watch: UseFormWatch<ProfileFormType>;
};

const ProfileForm = ({
  user,
  defaultValues,
  register,
  setValue,
  watch,
}: ProfileFormProps) => {
  return (
    <Stack spacing={16} style={{ width: '100%' }}>
      <ProfileImageUploader
        setValue={setValue}
        value={watch('imageUrl')}
        defaultValue={defaultValues?.imageUrl}
      />
      <Input
        label="이름"
        value={user.name}
        placeholder="이름을 입력해주세요."
        disabled={true}
      />
      <Input
        label="이메일"
        value={user.email}
        placeholder="이메일을 적어주세요."
        disabled={true}
      />
      <Input
        label="깃허브 아이디"
        placeholder="깃허브 아이디를 입력해주세요."
        defaultValue={defaultValues?.githubId}
        {...register('githubId')}
      />
      <Textarea
        label="소개 말"
        placeholder="소개 말을 적어주세요."
        defaultValue={defaultValues?.introduction}
        {...register('introduction')}
      />
      <Select label="포지션" defaultValue={defaultValues?.major} {...register('major')}>
        <option value="FRONTEND">프론트엔드</option>
        <option value="BACKEND">백엔드</option>
        <option value="EMBEDDED">임베디드</option>
        <option value="GAME">게임</option>
        <option value="ETC">기타</option>
      </Select>
      <Input
        label="포트폴리오"
        placeholder="포트폴리오 링크를 적어주세요."
        defaultValue={defaultValues?.portfolioUrl}
        {...register('portfolioUrl')}
      />
      <Input
        label="이력서"
        placeholder="이력서 링크를 적어주세요."
        defaultValue={defaultValues?.resumeUrl}
        {...register('resumeUrl')}
      />
      {user.isGraduated && (
        <Input
          label="회사"
          placeholder="회사명을 입력해주세요."
          defaultValue={defaultValues?.company}
          {...register('company')}
        />
      )}
    </Stack>
  );
};

export default ProfileForm;
