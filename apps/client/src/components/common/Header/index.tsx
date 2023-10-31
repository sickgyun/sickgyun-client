import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box borderBottom="1px solid" borderColor="gray.200" width="100%" height="64px">
      <Box
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="80%"
        height="100%"
      >
        <Text fontSize="22px" fontWeight="semibold">
          로고
        </Text>
        <Flex gap="16px">
          <Button variant="ghost">로그인</Button>
          <Button>회원가입</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
