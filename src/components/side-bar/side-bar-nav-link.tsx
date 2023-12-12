import { Center, GridItem, Icon, IconButton, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

type Props = {
  to: string;
  icon: IconType;
  text: string;
};

const SideBarNavLink: React.FC<Props> = ({ to, icon, text }) => {
  const navigation = useNavigate();

  return (
    <GridItem as={Center}>
      <Center flexDir="column">
        <IconButton
          variant="link"
          onClick={() => navigation(to)}
          icon={<Icon as={icon} />}
          role="button"
          fontSize={42}
          color="sidebarForeground"
          aria-label={text}
        />
        <Text color="sidebarForeground">{text}</Text>
      </Center>
    </GridItem>
  );
};

export default SideBarNavLink;
