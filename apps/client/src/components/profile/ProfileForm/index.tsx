import { Input, Select, Stack } from '@sickgyun/ui';
import type { UseFormRegister } from 'react-hook-form';
import { ProfileForm } from '@/types/profile';
import type { User } from '@/types/user';

type ProfileFormProps = {
  user: User;
  register: UseFormRegister<ProfileForm>;
};

const ProfileForm = ({ user, register }: ProfileFormProps) => {
  return (
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
  );
};

export default ProfileForm;
