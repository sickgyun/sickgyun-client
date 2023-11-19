import { Box, Flex, Image, Text } from '@chakra-ui/react';

type JobPostingCardProps = {
  title: string;
  imageUrl?: string;
  companyName: string;
  detailLink: string;
};

const JobPostingCard = ({
  title,
  imageUrl,
  companyName,
  detailLink,
}: JobPostingCardProps) => {
  const handleGoComapnyDetailPage = () => {
    window.open(detailLink);
  };

  return (
    <Box
      onClick={handleGoComapnyDetailPage}
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
        src={imageUrl}
        borderRadius="8px"
        objectFit="cover"
        width="100%"
        height="140px"
        alt="Job Posting"
      />
      <Flex flexDirection="column">
        <Text fontSize="14px" fontWeight="medium" color="gray.600">
          {companyName}
        </Text>
        <Text fontSize="16px" fontWeight="semibold">
          {title}
        </Text>
      </Flex>
    </Box>
  );
};

export default JobPostingCard;
