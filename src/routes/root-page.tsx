import {
  Layout,
  Loading,
  SideBar,
  SideBarBrand,
  SideBarNav,
  SideBarNavLink,
} from '../components';
import { PiBooks, PiHouse, PiBook, PiGear } from 'react-icons/pi';
import { bookRoute, libraryRoute, settingsRoute } from '../constants/routes';
import { Outlet, useNavigation } from 'react-router-dom';
import { Center } from '@chakra-ui/react';

const links = [
  {
    text: 'Home',
    to: '/',
    icon: PiHouse,
  },
  {
    text: 'Library',
    to: libraryRoute.baseUrl,
    icon: PiBooks,
  },
  {
    text: 'Book',
    to: bookRoute.baseUrl,
    icon: PiBook,
  },
];

const RootPage = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <SideBar>
        <SideBarBrand />
        <SideBarNav>
          {links.map((link, index) => (
            <SideBarNavLink
              key={index}
              to={link.to}
              icon={link.icon}
              text={link.text}
            />
          ))}
        </SideBarNav>
        <SideBarNavLink
          to={settingsRoute.baseUrl}
          icon={PiGear}
          text="Settings"
        />
      </SideBar>
      {navigation.state !== 'idle' ? (
        <Center h="100%" w="100%">
          <Loading text={navigation.state} />
        </Center>
      ) : (
        <Outlet />
      )}
    </Layout>
  );
};

export default RootPage;
