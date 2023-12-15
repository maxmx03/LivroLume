import {
  Layout,
  LazyOutlet,
  SideBar,
  SideBarBrand,
  SideBarNav,
  SideBarNavLink,
} from '../components';
import { PiBooks, PiHouse, PiBook, PiGear } from 'react-icons/pi';
import { readerRoute, libraryRoute, settingsRoute } from '../constants/routes';

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
    text: 'Reader',
    to: readerRoute.baseUrl,
    icon: PiBook,
  },
];

const RootPage = () => {
  return (
    <Layout flexDir="row">
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
      <LazyOutlet />
    </Layout>
  );
};

export default RootPage;
