'use client';

import styled from '@emotion/styled';
import { isNil } from 'lodash';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ProfileList from '@/components/profile/ProfileList';
import ProfileNavigationBar from '@/components/profile/ProfileNavigationBar';
import { withAuth } from '@/hocs/withAuth';
import type { GetProfileListParams } from '@/hooks/api/profile/useGetProfileList';
import type { Major } from '@/types/profile';

const ProfilePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const selectedMajor = params.get('major') as Major;
  const { register, setValue, watch } = useForm<GetProfileListParams>({
    defaultValues: {
      major: selectedMajor,
      cardinal: 0,
      isRecruited: false,
    },
  });

  useEffect(() => {
    if (isNil(selectedMajor)) {
      router.replace('/profile?major=ALL');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMajor]);

  return (
    <>
      <Header />
      <StyledProfilePageLayout>
        <ProfileNavigationBar register={register} setValue={setValue} watch={watch} />
        <StyledProfilePage>
          <ProfileList
            major={watch('major')}
            isRecruited={watch('isRecruited')}
            cardinal={watch('cardinal')}
          />
        </StyledProfilePage>
      </StyledProfilePageLayout>
      <Footer />
    </>
  );
};

export default withAuth(ProfilePage);

const StyledProfilePageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  min-height: 100vh;
`;

const StyledProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  padding-top: 32px;
  margin-bottom: 48px;
`;
