'use client';

import styled from '@emotion/styled';
import { Flex, Link, Spacer, Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ErrorReportBanner from '@/components/common/Banners/ErrorReportBanner';
import QnaBanner from '@/components/common/Banners/QnaBanner';
import UserInterviewBanner from '@/components/common/Banners/UserInterviewBanner';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import LoginBox from '@/components/main/LoginBox';
import MainBanner from '@/components/main/MainBanner';
import RecuritList from '@/components/recurit/RecuritList';
import { MAJOR_LIST, RECRUIT_FULL_VIEW_LINK } from '@/constants/profile';
import { LogClickEvent } from '@/libs/logging';
import type { Major } from '@/types/profile';

const MainPage = () => {
  const router = useRouter();

  const renderBanners = () => {
    return [<ErrorReportBanner />, <UserInterviewBanner />];
  };

  const hanldeGoProfilePage = (major: Major) => {
    router.push(`/profile?major=${major}`);
  };

  return (
    <>
      <Header />
      <StyledMainPageLayout>
        <StyledMainPage>
          <Stack direction="horizontal" align="center" spacing={36}>
            <MainBanner banners={renderBanners()} />
            <LoginBox />
          </Stack>
          <Spacer height={84} />
          <Stack spacing={18}>
            <Text fontType="h3">커피챗할 선배나 친구를 찾아봐요!</Text>
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
            <Text fontType="h3">자유롭게 물어봐요!</Text>
            <QnaBanner />
          </Stack>
          <Spacer height={64} />
          <Stack spacing={18} style={{ position: 'relative' }}>
            <Flex align="center" justify="space-between">
              <Text fontType="h3">채용 중인 회사에요!</Text>
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

const StyledRecuritListWrapper = styled.div`
  position: relative;
  min-height: 300px;
`;
