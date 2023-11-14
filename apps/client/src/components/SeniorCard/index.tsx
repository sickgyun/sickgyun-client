import { Box, Flex, Image, Text } from '@chakra-ui/react';

const SeniorCard = () => {
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
        <Image
          src="/assets/mock_senior.jpeg"
          borderRadius="8px"
          height="100%"
          alt="Senior Profile"
        />
        <Flex flexDirection="column" justifyContent="flex-start" height="100%">
          <Flex flexDirection="column" gap="4px">
            <Flex alignItems="center" gap="6px">
              <Text fontSize="18px" fontWeight="semibold">
                김석진
              </Text>
              <Text fontSize="12px" color="gray.600" fontWeight="medium">
                2기 • 프론트엔드
              </Text>
            </Flex>
            <Text
              maxWidth="95%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              color="gray.600"
              fontSize="14px"
            >
              즐거움을 토대로 토대를 만드는 도리"토스"를 좋아하는 개발자
            </Text>
            <Flex gap="6px" alignItems="center">
              <Image src="/assets/company.svg" height="16px" alt="Company Icon" />
              <Text fontSize="14px" color="gray.600">
                토스페이먼츠
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SeniorCard;
