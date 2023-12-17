import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      h="100%"
      w="100%"
      bg="bgPrimary"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Layout;
