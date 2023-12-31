type Params = {
  multi?: boolean;
};

const baseUrl = '/library';
const libraryRoute = {
  baseUrl,
  add: {
    url(): string {
      return `${baseUrl}/add/file`;
    },
  },
  read: {
    url(): string {
      return `${baseUrl}/read/file`;
    },
  },
  delete: {
    url(params?: Params): string {
      if (params && params.multi) return `${baseUrl}/delete/files`;
      return `${baseUrl}/delete/file`;
    },
  },
  edit: {
    url(): string {
      return `${baseUrl}/edit`;
    },
  },
};

export type BookRoute = typeof libraryRoute;
export default libraryRoute;
