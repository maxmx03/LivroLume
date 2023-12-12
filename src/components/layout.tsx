import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box
      display="flex"
      h="100%"
      width="100%"
      maxH="100%"
      maxW="100%"
      bg="background"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Layout;
