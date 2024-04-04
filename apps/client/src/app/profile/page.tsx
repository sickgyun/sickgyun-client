'use client';

import styled from '@emotion/styled';
import { Button, Stack } from '@sickgyun/ui';
import { isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileActionButton from '@/components/profile/ProfileActionButton';
import ProfileList from '@/components/profile/ProfileList';
import { MAJOR_LIST } from '@/constants/profile';
import { withAuth } from '@/hocs/withAuth';
import { useUser } from '@/hooks/common/useUser';
import type { Major } from '@/types/profile';

const ProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const user = useUser();
  const selectedMajor = params.get('major') as Major;

  useLayoutEffect(() => {
    if (isNil(selectedMajor)) {
      router.replace('/profile?major=ALL');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMajor]);

  const handleMajorSelected = (major: Major) => {
    router.replace(`/profile?major=${major}`);
  };

  return (
    <>
      <Header />
      <StyledProfilePageLayout>
        <StyledProfilePage>
          <Stack
            direction="horizontal"
            align="center"
            spacing={24}
            style={{ marginBottom: '48px' }}
          >
            {MAJOR_LIST.map((major) => (
              <Button
                key={major.value}
                styleType="quaternary"
                onClick={() => handleMajorSelected(major.value)}
                isActive={major.value === selectedMajor}
              >
                {major.name}
              </Button>
            ))}
          </Stack>
          <ProfileList major={selectedMajor} />
        </StyledProfilePage>
      </StyledProfilePageLayout>
      <Footer />
      {user.isLogin ? (
        <ProfileActionButton actionType={user.hasCreatedProfile ? 'update' : 'create'} />
      ) : null}
    </>
  );
};

export default withAuth(ProfilePage);

const StyledProfilePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  min-height: 100vh;
`;

const StyledProfilePage = styled(Stack)`
  margin: 0 auto;
  padding-top: 48px;
  padding-bottom: 64px;
  margin-bottom: 48px;
  width: 80%;
`;
