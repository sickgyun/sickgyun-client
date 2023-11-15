import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { getUserProfileImage } from '@/utils/common';

type SeniorCardProps = {
  id: number;
  name: string;
  profileUrl?: string;
  cardinal: number;
  position: string;
  bio?: string;
  company?: string;
};

const SeniorCard = ({
  id,
  name,
  cardinal,
  profileUrl,
  position,
  bio,
  company,
}: SeniorCardProps) => {
  console.log(id);

  const profileImage = getUserProfileImage(profileUrl);

  return (
    <Box
      transition="all 0.25s ease"
      padding="16px"
      borderRadius="8px"
      _hover={{
        backgroundColor: 'gray.50',
        cursor: 'pointer',
      }}
      height="120px"
    >
      <Flex gap="24px" alignItems="center" height="100%">
        <Image src={profileImage} borderRadius="8px" height="100%" alt="Senior Profile" />
        <Flex flexDirection="column" justifyContent="flex-start" height="100%">
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
            {company && (
              <Flex gap="6px" alignItems="center">
                <Image src="/assets/company.svg" height="16px" alt="Company" />
                <Text fontSize="14px" color="gray.600">
                  {company}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SeniorCard;
