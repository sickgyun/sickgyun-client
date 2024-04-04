'use client';

import styled from '@emotion/styled';
import { Flex, Link, Spacer, Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import LoginBox from '@/components/main/LoginBox';
import MainBanner from '@/components/main/MainBanner';
import RecuritList from '@/components/recurit/RecuritList';
import { JOB_POSTING_FULL_VIEW_LINK, MAJOR_LIST } from '@/constants/profile';
import type { Major } from '@/types/profile';
import { isProd } from '@/utils/isProd';

const MainPage = () => {
  const router = useRouter();

  const hanldeGoProfilePage = (major: Major) => {
    router.push(`/profile?major=${major}`);
  };

  const handleGoQnaPage = () => {
    if (isProd(process.env.NODE_ENV)) {
      alert('상진이가 열심히 개발중이에요!');
      return;
    }
    router.push(`/qna`);
  };

  const renderBanners = () => {
    return [
      <img src="/assets/images/mocks/mock_banner.jpeg" alt="Banner1" />,
      <img src="/assets/images/mocks/mock_banner.jpeg" alt="Banner2" />,
    ];
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
            <Text fontType="h3">
              진로, 취업 관련 고민을 같이 말할 선배, 친구를 찾아봐요!
            </Text>
            <Flex justify="space-between">
              {MAJOR_LIST.map((major) => (
                <StyledStudentProfileRedirectButton
                  key={major.value}
                  onClick={() => hanldeGoProfilePage(major.value)}
                >
                  <Image
                    src={`/assets/images/major/${major.value}.png`}
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
          <Stack>
            <Text fontType="h3">뭘 해야 할지 모르겠다고요? 조언을 구해봐요!</Text>
            <StyledQnaBannerImage
              onClick={handleGoQnaPage}
              src="/assets/images/qna_banner.png"
              alt="Qna Banner"
            />
          </Stack>
          <Spacer height={64} />
          <StyledRecuritListContainer>
            <Flex align="center" justify="space-between">
              <Text fontType="h3">채용 중인 회사에요!</Text>
              <Link href={JOB_POSTING_FULL_VIEW_LINK} fontType="p1" color="gray750">
                전체 보기
              </Link>
            </Flex>
            <RecuritList />
          </StyledRecuritListContainer>
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

const StyledQnaBannerImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  border-radius: 16px;
  height: 150px;
  width: 100%;
`;

const StyledRecuritListContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
