import { GridItem } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const SideBarNav: React.FC<Props> = ({ children }) => (
  <GridItem
    display="grid"
    justifyContent="center"
    alignItems="center"
    gridTemplateRows="repeat(3, 1fr)"
  >
    {children}
  </GridItem>
);

export default SideBarNav;
