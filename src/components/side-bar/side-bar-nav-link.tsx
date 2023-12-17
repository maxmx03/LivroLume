import { Center, GridItem, Icon, IconButton, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  to: string;
  icon: IconType;
  text: string;
};

const SideBarNavLink: React.FC<Props> = ({ to, icon, text }) => {
  const navigation = useNavigate();
  const location = useLocation();

  const isActive = () => location.pathname === to;

  return (
    <GridItem as={Center}>
      <Center flexDir="column">
        <IconButton
          variant="link"
          onClick={() => navigation(to)}
          icon={<Icon as={icon} />}
          role="button"
          fontSize={42}
          color={isActive() ? 'primary' : 'textSecondary'}
          aria-label={text}
        />
        <Text color={isActive() ? 'primary' : 'textSecondary'}>{text}</Text>
      </Center>
    </GridItem>
  );
};

export default SideBarNavLink;
