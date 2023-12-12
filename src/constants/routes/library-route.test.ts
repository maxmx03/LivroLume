import libraryRoute from './library-route';

describe('library route', () => {
  test('url', () => {
    const baseUrl = libraryRoute.baseUrl;
    expect(libraryRoute.add.url()).toBe(baseUrl + '/add/file');
    expect(libraryRoute.add.url({ multi: true })).toBe(baseUrl + '/add/files');
    expect(libraryRoute.delete.url()).toBe(baseUrl + '/delete/file');
    expect(libraryRoute.delete.url({ multi: true })).toBe(
      baseUrl + '/delete/files'
    );
    expect(libraryRoute.edit.url()).toBe(baseUrl + '/edit');
  });
});
