import { Box, Flex, Image, Text } from '@chakra-ui/react';

const MouCompanyCard = () => {
  return (
    <Box
      onClick={() =>
        window.open(
          'https://www.jobkorea.co.kr/company/43275639?utm_term=&utm_source=pmax&utm_medium=display&cmpid=pmax&gad_source=1&gclid=CjwKCAjw7oeqBhBwEiwALyHLM03yJKeELO6J4otOId4BL8r1rXsuC_v-fcgyqsLPZ9OSe1KW67LLtBoCzn0QAvD_BwE'
        )
      }
      display="flex"
      alignItems="center"
      gap="12px"
      padding="16px"
      borderRadius="8px"
      transition="all 0.25s ease"
      _hover={{
        backgroundColor: 'gray.50',
        cursor: 'pointer',
      }}
      height="80px"
    >
      <Image
        src="/assets/mock_company.webp"
        width="50px"
        height="50px"
        borderRadius="8px"
        alt="Company"
      />
      <Flex flexDirection="column" alignItems="flex-start">
        <Text fontSize="16px" fontWeight="semibold">
          카카오스타일(Kakao Style)
        </Text>
        <Text color="gray.500" fontSize="12px" fontWeight="medium">
          IT.컨텐츠
        </Text>
      </Flex>
    </Box>
  );
};

export default MouCompanyCard;
