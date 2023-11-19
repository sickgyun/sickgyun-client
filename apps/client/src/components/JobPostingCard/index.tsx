import { Box, Flex, Image, Text } from '@chakra-ui/react';

const JobPostingCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexShrink={0}
      gap="12px"
      borderRadius="8px"
      transition="all 0.3s ease-in-out 0s"
      width="100%"
      height="200px"
      _hover={{ cursor: 'pointer', transform: 'translateY(-8px)' }}
    >
      <Image
        src="https://cdn.rallit.com/image/2023-06-28/sG7SdtYWahcPAZOkcascd.jpg?w=384"
        borderRadius="8px"
        width="100%"
        height="140px"
        alt="Job Posting"
      />
      <Flex flexDirection="column" gap="12p">
        <Text fontSize="14px" fontWeight="medium" color="gray.600">
          드림어스컴퍼니
        </Text>
        <Text fontSize="16px" fontWeight="semibold">
          iOS 개발자(2년 이상)
        </Text>
      </Flex>
    </Box>
  );
};

export default JobPostingCard;
