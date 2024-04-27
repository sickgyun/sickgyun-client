import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconExpandMoreFill } from '@seed-design/icon';
import { Button, Chip, Flex, Select, Stack, Switch, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ChangeEventHandler } from 'react';
import { useEffect } from 'react';
import type { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import CoffeechatContactFormModal from '@/components/coffeechat/CoffeechatContactFormModal';
import type { GetProfileListParams } from '@/hooks/api/profile/useGetProfileList';
import { useUser } from '@/hooks/common/useUser';
import type { Promotion } from '@/types/profile';

const getMajorFieldName = {
  ALL: '전체 분야',
  FRONTEND: '프론트엔드',
  BACKEND: '백엔드',
  EMBEDDED: '임베디드',
  GAME: '게임',
  ETC: '기타',
} as const;

type ProfileNavigationBarProps = {
  register: UseFormRegister<GetProfileListParams>;
  setValue: UseFormSetValue<GetProfileListParams>;
  watch: UseFormWatch<GetProfileListParams>;
};

const ProfileNavigationBar = ({
  register,
  setValue,
  watch,
}: ProfileNavigationBarProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const overlay = useOverlay();
  const { user, isLoading } = useUser();
  const major = watch('major');
  const promotion = params.get('promotion') as Promotion;
  const isSickgyun = promotion === 'SICKGYUN';
  const isBumawiki = promotion === 'BUMAWIKI';

  const openCoffeechatContactFormModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactFormModal isOpen={isOpen} onClose={close} />
    ));
  };

  const handleBumawikiChipClick = () => {
    if (isBumawiki) {
      router.push(`/profile?major=${major}`);
    } else {
      router.push(`/profile?major=${major}&promotion=BUMAWIKI`);
    }
  };

  const handleSickgyunChipClick = () => {
    if (isSickgyun) {
      router.push(`/profile?major=${major}`);
    } else {
      router.push(`/profile?major=${major}&promotion=SICKGYUN`);
    }
  };

  const handleIsRecruitedSwitchChange = (value: any) => {
    setValue('isRecruited', value);
  };

  const handleCardinalSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue('cardinal', Number(e.target.value));
  };

  const handleGoProfileManagePage = () => {
    if (user.hasCreatedProfile) {
      router.push('/profile/update');
    } else {
      router.push('/profile/create');
    }
  };

  useEffect(() => {
    router.push(`/profile?major=${major}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [major]);

  return (
    <StyledProfileNavigationBar>
      <StyledProfileNavigationBarWrapper>
        <Stack direction="vertical" spacing={18}>
          <StyledMajorSelect>
            <Text fontType="h2">{getMajorFieldName[major]}</Text>
            <StyledIconExpandMoreFill />
            <StyledSelect {...register('major')}>
              <option value="ALL">전체 분야</option>
              <option value="FRONTEND">프론트엔드</option>
              <option value="BACKEND">백엔드</option>
              <option value="EMBEDDED">임베디드</option>
              <option value="GAME">게임</option>
              <option value="ETC">기타</option>
            </StyledSelect>
          </StyledMajorSelect>
          <Flex align="center" justify="space-between">
            <Stack direction="horizontal" align="center" spacing={24}>
              <Stack direction="horizontal" align="center" spacing={16}>
                <StyledCardinalSelect
                  {...register('cardinal')}
                  onChange={handleCardinalSelectChange}
                >
                  <option value="0">전체 기수</option>
                  <option value="1">1기</option>
                  <option value="2">2기</option>
                  <option value="3">3기</option>
                  <option value="4">4기</option>
                </StyledCardinalSelect>
                <Switch
                  options={[
                    { name: '전체', value: false },
                    { name: '재직자', value: true },
                  ]}
                  value={watch('isRecruited')}
                  onChange={handleIsRecruitedSwitchChange}
                />
              </Stack>
              <Stack direction="horizontal" align="center" spacing={8}>
                <Chip
                  isSelected={promotion === 'BUMAWIKI'}
                  onClick={handleBumawikiChipClick}
                >
                  #부마위키
                </Chip>
                <Chip
                  isSelected={promotion === 'SICKGYUN'}
                  onClick={handleSickgyunChipClick}
                >
                  #식견
                </Chip>
              </Stack>
            </Stack>
            {!isLoading && (
              <Stack direction="horizontal" align="center" spacing={12}>
                <Button onClick={openCoffeechatContactFormModal} styleType="outline">
                  연락처 {user.hasNotContact ? '생성' : '수정'}
                </Button>
                <Button onClick={handleGoProfileManagePage}>
                  프로필 {user.hasCreatedProfile ? '수정' : '생성'}
                </Button>
              </Stack>
            )}
          </Flex>
        </Stack>
      </StyledProfileNavigationBarWrapper>
    </StyledProfileNavigationBar>
  );
};

export default ProfileNavigationBar;

const StyledProfileNavigationBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  width: 100%;
  padding: 24px 0;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray200};
    background-color: ${theme.colors.white};
  `}
`;

const StyledProfileNavigationBarWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const StyledMajorSelect = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconExpandMoreFill = styled(IconExpandMoreFill)`
  width: 28px;
  height: 28px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const StyledSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 135px;
  height: 33px;
  cursor: pointer;
  ${({ theme }) => css`
    ${theme.fonts.body1}
  `}
`;

const StyledCardinalSelect = styled(Select)`
  min-width: 130px;
`;
