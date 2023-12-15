import readerRoute from './reader-route';

describe('book route', () => {
  test('url', () => {
    const baseUrl = readerRoute.baseUrl;
    expect(readerRoute.edit.url()).toBe(baseUrl + '/edit');
  });
});
