import { Box, Flex, Image, Text } from '@chakra-ui/react';

const SeniorCard = () => {
  return (
    <Box
      transition="all 0.25s ease"
      padding="24px"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="8px"
      _hover={{
        backgroundColor: 'gray.50',
        cursor: 'pointer',
      }}
      height="144px"
    >
      <Flex gap="24px" height="100%">
        <Image
          src="/assets/mock_senior.jpeg"
          borderRadius="8px"
          width="95px"
          height="100%"
          alt="Senior"
        />
        <Flex flexDirection="column" justifyContent="center" height="100%">
          <Flex flexDirection="column" gap="6px">
            <Flex flexDirection="column">
              <Flex alignItems="center" gap="6px">
                <Text fontSize="24px" fontWeight="semibold">
                  김석진
                </Text>
                <Text fontSize="16px" color="gray.900" fontWeight="medium">
                  2기 - 토스페이먼츠
                </Text>
              </Flex>
              <Text maxWidth="100%" color="gray.600" fontSize="14px">
                즐거움을 토대로 토대를 만드는 도리"토스"를 좋아하는 개발자
              </Text>
            </Flex>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="gray.700"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="18px"
              fontSize="14px"
              fontWeight="medium"
              width="80px"
              height="24px"
            >
              프론트엔드
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SeniorCard;
