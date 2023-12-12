import { render, screen } from '@testing-library/react';
import { SideBar, SideBarBrand, SideBarNav, SideBarNavLink } from '..';
import { PiBook, PiBooks, PiGear, PiHouse } from 'react-icons/pi';
import { bookRoute, libraryRoute, settingsRoute } from '../../constants/routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

describe('Layout', () => {
  test('renders', () => {
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

    const renderComponent = () => {
      const router = createBrowserRouter([
        {
          path: '/',
          element: (
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
              <SideBarNavLink
                to={settingsRoute.baseUrl}
                icon={PiGear}
                text="Settings"
              />
            </SideBar>
          ),
        },
      ]);

      render(<RouterProvider router={router} />);
    };

    renderComponent();

    const sideBarBrand = screen.getByRole('img');
    expect(sideBarBrand).toBeInTheDocument();

    const sideButtons = screen.getAllByRole('button');
    expect(sideButtons.length).toBe(4);

    const textsToCheck = ['Home', 'Library', 'Book', 'Settings'];
    textsToCheck.forEach(async (text) => {
      const sideBarText = await screen.findByText(text);
      expect(sideBarText).toBeInTheDocument();
    });
  });
});
