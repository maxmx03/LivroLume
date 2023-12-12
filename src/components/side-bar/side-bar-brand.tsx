import { Center, GridItem, Icon } from '@chakra-ui/react';
import { PiBooks } from 'react-icons/pi';

const size = 70;

const SideBarBrand = () => (
  <GridItem as={Center} alignItems="start" mt="5">
    <Center
      height={`${size}px`}
      width={`${size}px`}
      borderRadius="20px"
      bg="sidebarForeground"
    >
      <Icon as={PiBooks} color="sidebarBackground" fontSize="62" role="img" />
    </Center>
  </GridItem>
);

export default SideBarBrand;
