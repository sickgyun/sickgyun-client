import { Box, Button, Text } from '@chakra-ui/react';

const LoginBox = () => {
  const handleLogin = () => {
    window.open(process.env.NEXT_PUBLIC_AUTH_URL);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap="48px"
      padding="32px"
      borderRadius="8px"
      border="1px solid"
      borderColor="gray.200"
      width="500px"
      height="250px"
    >
      <Box>
        <Text as="p" fontSize="20px">
          로그인하고
        </Text>
        <Text as="p" fontSize="20px">
          다양한 정보를 얻어보세요.
        </Text>
      </Box>
      <Button onClick={handleLogin} width="100%">
        로그인
      </Button>
    </Box>
  );
};

export default LoginBox;
