const baseUrl = '/book';

const bookRoute = {
  baseUrl,
  read: {
    url(): string {
      return `${baseUrl}/read`;
    },
  },
  edit: {
    url(): string {
      return `${baseUrl}/edit`;
    },
  },
};

export type BookRoute = typeof bookRoute;
export default bookRoute;
