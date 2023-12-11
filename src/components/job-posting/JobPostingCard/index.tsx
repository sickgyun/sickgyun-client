import { Box, Flex, Image, Text } from '@chakra-ui/react';

type JobPostingCardProps = {
  title: string;
  imageUrl?: string;
  companyName: string;
  detailLink: string;
};

const JobPostingCard = ({ title, imageUrl, companyName, detailLink }: JobPostingCardProps) => {
  const handleGoComapnyDetailPage = () => {
    window.open(detailLink);
  };

  return (
    <Box
      onClick={handleGoComapnyDetailPage}
      display="flex"
      alignItems="center"
      gap="24px"
      borderRadius="16px"
      border="1px solid"
      borderColor="gray.200"
      padding="18px"
      width="100%"
      height="120px"
      _hover={{ cursor: 'pointer' }}
    >
      <Image
        src={imageUrl}
        border="1px solid"
        borderColor="gray.100"
        borderRadius="8px"
        objectFit="cover"
        width="85px"
        height="85px"
        alt="Job Posting"
      />
      <Flex flexDirection="column" gap="4px">
        <Text fontSize="18px" fontWeight="semibold">
          {title}
        </Text>
        <Text fontSize="14px" fontWeight="medium" color="gray.600">
          {companyName}
        </Text>
      </Flex>
    </Box>
  );
};

export default JobPostingCard;
