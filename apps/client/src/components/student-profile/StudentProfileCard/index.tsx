import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { getUserProfileImage } from '@cheerup/utils';

type StudentProfileCardProps = {
  onClick: () => void;
  name: string;
  profileUrl?: string;
  cardinal: number;
  position: string;
  bio?: string;
  company?: string;
};

const StudentProfileCard = ({
  onClick,
  name,
  cardinal,
  profileUrl,
  position,
  bio,
  company,
}: StudentProfileCardProps) => {
  const profileImage = getUserProfileImage(profileUrl);

  return (
    <Box
      onClick={onClick}
      transition="all 0.25s ease"
      padding="16px"
      borderRadius="8px"
      _hover={{
        backgroundColor: 'gray.50',
        cursor: 'pointer',
      }}
      height="120px"
    >
      <Flex gap="24px" alignItems="flex-start" height="100%">
        <Image
          src={profileImage}
          borderRadius="8px"
          height="100%"
          alt="Student Profile"
        />
        <Flex flexDirection="column" gap="4px">
          <Flex alignItems="center" gap="6px">
            <Text fontSize="18px" fontWeight="semibold">
              {name}
            </Text>
            <Text fontSize="12px" color="gray.600" fontWeight="medium">
              {cardinal}기 • {position}
            </Text>
          </Flex>
          {bio && (
            <Text
              maxWidth="95%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              color="gray.600"
              fontSize="14px"
            >
              {bio}
            </Text>
          )}

          <Flex gap="6px" alignItems="center">
            <Image src="/assets/company.svg" height="16px" alt="Company" />
            <Text fontSize="14px" color="gray.600">
              {company ? company : '부산소프트웨어마이스터고등학교'}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StudentProfileCard;
