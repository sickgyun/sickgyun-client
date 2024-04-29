'use client';

import styled from '@emotion/styled';
import { Flex, InlineBanner, Link, Spacer, Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import LoginBox from '@/components/main/LoginBox';
import MainBanner from '@/components/main/MainBanner';
import DirectProfileList from '@/components/profile/DirectProfileList';
import RecuritList from '@/components/recurit/RecuritList';
import { MAJOR_LIST, RECRUIT_FULL_VIEW_LINK } from '@/constants/profile';
import { useUser } from '@/hooks/common/useUser';
import { LogClickEvent } from '@/libs/logging';
import type { Major } from '@/types/profile';

const MainPage = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  const hanldeGoProfilePage = (major: Major) => {
    router.push(`/profile?major=${major}`);
  };

  return (
    <>
      <Header />
      {isLoading
        ? null
        : !user.isLogin && (
            <InlineBanner>
              학교 계정으로 로그인해주세요. *아직 선생님 계정은 지원하지 않아요ㅠ
            </InlineBanner>
          )}
      <StyledMainPageLayout>
        <StyledMainPage>
          <Stack direction="horizontal" align="center" spacing={36}>
            <MainBanner />
            <LoginBox />
          </Stack>
          <Spacer height={84} />
          <Stack spacing={18}>
            <Text fontType="h4">커피챗할 선배나 친구를 찾아봐요!</Text>
            <Flex justify="space-between">
              {MAJOR_LIST.map((major) => (
                <StyledStudentProfileRedirectButton
                  key={major.value}
                  onClick={() => hanldeGoProfilePage(major.value)}
                >
                  <Image
                    src={`/assets/images/major/${major.value.toLowerCase()}.png`}
                    height={48}
                    width={48}
                    alt="Major"
                  />
                  <Text fontType="body1">{major.name}</Text>
                </StyledStudentProfileRedirectButton>
              ))}
            </Flex>
          </Stack>
          <Spacer height={64} />
          <Stack spacing={18}>
            <Text fontType="h4">
              {user.isLogin
                ? `${user.name}님의 커피챗 요청을 기다리는 선배들이에요`
                : '커피챗 요청을 기다리는 선배들이에요'}
            </Text>
            <StyledDirectProfileListWrapper>
              <DirectProfileList />
            </StyledDirectProfileListWrapper>
          </Stack>
          <Spacer height={64} />
          <Stack spacing={18} style={{ position: 'relative' }}>
            <Flex align="center" justify="space-between">
              <Text fontType="h4">채용 중인 회사에요!</Text>
              <LogClickEvent name="click_recurit_full_view_link">
                <Link href={RECRUIT_FULL_VIEW_LINK} fontType="p1" color="gray750">
                  전체 보기
                </Link>
              </LogClickEvent>
            </Flex>
            <StyledRecuritListWrapper>
              <RecuritList />
            </StyledRecuritListWrapper>
          </Stack>
          <Spacer height={64} />
        </StyledMainPage>
      </StyledMainPageLayout>
      <Footer />
    </>
  );
};

export default MainPage;

const StyledMainPageLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledMainPage = styled.div`
  margin: 0 auto;
  padding-top: 48px;
  padding-bottom: 64px;
  width: 80%;
`;

const StyledStudentProfileRedirectButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.25s ease;
  border-radius: 8px;
  width: 200px;
  height: 120px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
    cursor: pointer;
  }
`;

const StyledDirectProfileListWrapper = styled.div`
  position: relative;
  height: 180px;
`;

const StyledRecuritListWrapper = styled.div`
  position: relative;
  height: 300px;
`;
