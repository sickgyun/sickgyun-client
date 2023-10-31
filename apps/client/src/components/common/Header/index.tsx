import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box borderBottom="1px solid" borderColor="gray.100" width="100%" height="54px">
      <Box
        margin="0 auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="80%"
        height="100%"
      >
        <Text fontSize="18px" fontWeight="semibold">
          로고
        </Text>
        <Button size="sm" variant="ghost">
          로그인
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
