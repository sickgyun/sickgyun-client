import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { getUserProfileImage } from '@/utils';
import { useGetStudentProfile } from '@/hooks/api/student-profile/useGetStudentProfile';

type StudnetProfileDetailContentProps = {
  userCode: number;
};

const StudentProfileDetailContents = ({ userCode }: StudnetProfileDetailContentProps) => {
  const { studentProfileData } = useGetStudentProfile(userCode);

  const profileImage = getUserProfileImage(studentProfileData?.profileUrl);

  const handleGoGithub = (githubId?: string) => {
    window.open(`https://github.com/${githubId}`);
  };

  const handleGoEmail = (email?: string) => {
    window.open(`mailto: ${email}`);
  };

  return (
    <Flex flexDirection="column" gap="24px">
      <Flex gap="24px" alignItems="flex-start" height="94px">
        <Image src={profileImage} borderRadius="8px" height="100%" alt="Student Profile" />
        <Flex flexDirection="column" gap="4px">
          <Flex alignItems="center" gap="6px">
            <Text fontSize="20px" fontWeight="semibold">
              {studentProfileData?.name}
            </Text>
            <Text fontSize="14px" color="gray.600" fontWeight="medium">
              {studentProfileData?.cardinal}기
            </Text>
          </Flex>
          <Text fontSize="14px" color="gray.600" fontWeight="medium">
            관심 있는 분야: {studentProfileData?.position}
          </Text>
          <Flex gap="6px" alignItems="center">
            <Image src="/assets/company.svg" height="16px" alt="Company" />
            <Text fontSize="14px" color="gray.600">
              {studentProfileData?.company
                ? studentProfileData.company
                : '부산소프트웨어마이스터고등학교'}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {studentProfileData?.bio && (
        <Flex flexDirection="column" gap="16px">
          <Text fontSize="20px" fontWeight="semibold">
            소개 말
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="12px 24px"
            backgroundColor="gray.50"
            borderRadius="8px"
            _hover={{ cursor: 'pointer' }}
            width="100%"
            minHeight="56px"
          >
            <Text color="gray.600" fontSize="14px">
              {studentProfileData.bio}
            </Text>
          </Box>
        </Flex>
      )}
      <Flex flexDirection="column" gap="16px">
        <Text fontSize="20px" fontWeight="semibold">
          정보
        </Text>
        {/* 깃허브 */}
        <Flex flexDirection="column" gap="12px">
          {studentProfileData?.githubId && (
            <Box
              onClick={() => handleGoGithub(studentProfileData.githubId)}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0px 24px"
              backgroundColor="gray.50"
              borderRadius="8px"
              _hover={{ cursor: 'pointer' }}
              width="100%"
              height="56px"
            >
              <Text fontSize="14px" fontWeight="semibold">
                👀 선배의 깃허브는 어떻게 되어 있을까요?
              </Text>
              <Flex alignItems="center">
                <Text fontSize="12px" color="gray.700">
                  깃허브 바로가기
                </Text>
                <ChevronRightIcon color="gray.700" />
              </Flex>
            </Box>
          )}
          {/* 이메일 */}
          {studentProfileData?.email && (
            <Box
              onClick={() => handleGoEmail(studentProfileData.email)}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0px 24px"
              backgroundColor="gray.50"
              borderRadius="8px"
              _hover={{ cursor: 'pointer' }}
              width="100%"
              height="56px"
            >
              <Text fontSize="14px" fontWeight="semibold">
                📨 커피챗, 코드리뷰, 조언 요청하러가기
              </Text>
              <Flex alignItems="center">
                <Text fontSize="12px" color="gray.700">
                  이메일 바로가기
                </Text>
                <ChevronRightIcon color="gray.700" />
              </Flex>
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StudentProfileDetailContents;
