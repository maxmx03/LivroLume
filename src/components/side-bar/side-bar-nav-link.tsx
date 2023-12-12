import {
  Center,
  GridItem,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  icon: IconType;
  text: string;
};

const SideBarNavLink: React.FC<Props> = ({ to, icon, text }) => (
  <GridItem as={Center}>
    <LinkBox>
      <Center flexDir="column">
        <LinkOverlay as={Link} to={to}>
          <Icon as={icon} color="sidebarForeground" fontSize={42} role="img" />
        </LinkOverlay>
        <Text color="sidebarForeground">{text}</Text>
      </Center>
    </LinkBox>
  </GridItem>
);

export default SideBarNavLink;
