import { render, screen } from '@testing-library/react';
import { SideBar, SideBarBrand, SideBarNav, SideBarNavLink } from '..';
import { PiBook, PiBooks, PiGear, PiHouse } from 'react-icons/pi';
import { bookRoute, libraryRoute } from '../../constants/routes';

describe('Layout', () => {
  test('renders', async () => {
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

    render(
      <SideBar>
        <SideBarBrand />
        <SideBarNav>
          {links.map((link, index) => (
            <SideBarNavLink
              to={link.to}
              icon={link.icon}
              text={link.text}
              key={index}
            />
          ))}
        </SideBarNav>
        <SideBarNavLink to="/settings" icon={PiGear} text="Settings" />
      </SideBar>
    );

    const sideBarIcons = await screen.findAllByRole('img');
    expect(sideBarIcons.length).toBe(5);

    const sideBarHomeText = await screen.findByText('Home');
    expect(sideBarHomeText).toBeInTheDocument();

    const sideBarLibraryText = await screen.findByText('Library');
    expect(sideBarLibraryText).toBeInTheDocument();

    const sideBarBookText = await screen.findByText('Book');
    expect(sideBarBookText).toBeInTheDocument();

    const sideBarSettingsText = await screen.findByText('Settings');
    expect(sideBarSettingsText).toBeInTheDocument();
  });
});
