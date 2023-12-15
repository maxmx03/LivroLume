const baseUrl = '/book';

const readerRoute = {
  baseUrl,
  edit: {
    url(): string {
      return `${baseUrl}/edit`;
    },
  },
};

export type BookRoute = typeof readerRoute;
export default readerRoute;
