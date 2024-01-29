'use client';

import styled from '@emotion/styled';
import { Flex, Link, Stack, Text } from '@sickgyun/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import JobPostingList from '@/components/job-posting/JobPostingList';
import LoginBox from '@/components/main/LoginBox';
import MainBanner from '@/components/main/MainBanner';
import { POSITION_LIST } from '@/constants/common';

const JOB_POSTING_FULL_VIEW_LINK =
  'https://www.rallit.com/?jobGroup=DEVELOPER&jobLevel=INTERN%2CBEGINNER%2CJUNIOR&pageNumber=1';

const MainPage = () => {
  const router = useRouter();

  const hanldeGoStudentProfilePage = (queryParams: string) => {
    router.push(`/student-profile?position=${queryParams}`);
  };

  const handleGoQnaPage = () => {
    router.push(`/qna`);
  };

  const renderBanners = () => {
    return [
      <img src="/assets/mock_banner.jpeg" alt="Banner1" />,
      <img src="/assets/mock_banner.jpeg" alt="Banner2" />,
    ];
  };

  return (
    <>
      <Header />
      <StyledMainPageLayout>
        <StyledMainPage>
          {/* 로그인 & 배너 섹션 */}
          <Stack
            direction="horizontal"
            align="center"
            spacing={36}
            style={{ marginBottom: '84px' }}
          >
            <MainBanner banners={renderBanners()} />
            {/* 로그인 박스 */}
            <LoginBox />
          </Stack>
          {/* 직군별 리스트 */}
          <Stack spacing={18} style={{ marginBottom: '64px' }}>
            <Text fontType="h3">
              진로, 취업 관련 고민을 같이 말할 선배, 친구를 찾아봐요!
            </Text>
            <Flex justify="space-between">
              {POSITION_LIST.map((position) => (
                <StyledStudentProfileRedirectButton
                  onClick={() => hanldeGoStudentProfilePage(position.queryParams)}
                >
                  <Image
                    src={`/assets/position/${position.queryParams}.png`}
                    height={48}
                    width={48}
                    alt="Position"
                  />
                  <Text fontType="body1">{position.name}</Text>
                </StyledStudentProfileRedirectButton>
              ))}
            </Flex>
          </Stack>
          {/* QNA 리스트*/}
          <Stack style={{ marginBottom: '64px' }}>
            <Text fontType="h3">뭘 해야 할지 모르겠다고요? 조언을 구해봐요!</Text>
            <StyledQnaBannerImage
              onClick={handleGoQnaPage}
              src="/assets/qna_banner.png"
              alt="Qna Banner"
            />
          </Stack>
          <Stack direction="vertical" spacing={18} style={{ marginBottom: '64px' }}>
            <Flex align="center" justify="space-between">
              <Text fontType="h3">채용 중인 회사에요!</Text>
              <Link href={JOB_POSTING_FULL_VIEW_LINK} fontType="p1" color="gray750">
                전체 보기
              </Link>
            </Flex>
            <JobPostingList />
          </Stack>
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
