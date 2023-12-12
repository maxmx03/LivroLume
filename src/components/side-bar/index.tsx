import { Grid } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const SideBar: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      h="100%"
      w="170px"
      gridTemplateColumns="1fr"
      gridTemplateRows="repeat(3, 1fr)"
      bg="sidebarBackground"
    >
      {children}
    </Grid>
  );
};

export default SideBar;
