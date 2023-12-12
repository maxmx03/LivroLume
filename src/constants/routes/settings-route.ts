type Params = {
  route: string;
};

const baseUrl = '/settings';
const settingsRoute = {
  baseUrl,
  edit: {
    url(params: Params): string {
      return `${baseUrl}/edit/${params.route}`;
    },
  },
};

export type BookRoute = typeof settingsRoute;
export default settingsRoute;
