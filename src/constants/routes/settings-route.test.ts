import settingsRoute from './settings-route';

describe('Settings rote', () => {
  test('url', () => {
    const baseUrl = settingsRoute.baseUrl;
    expect(settingsRoute.edit.url({ route: 'fonts' })).toBe(
      baseUrl + '/edit/fonts'
    );
    expect(settingsRoute.edit.url({ route: 'colorscheme' })).toBe(
      baseUrl + '/edit/colorscheme'
    );
  });
});
