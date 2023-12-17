type Shades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type Colors = {
  primary: string;
  textPrimary: string;
  textSecondary: string;
  bgPrimary: string;
  bgSecondary: string;
  bgDark: string;
  yellow: Shades;
  orange: Shades;
  red: Shades;
  blue: Shades;
  green: Shades;
  cyan: Shades;
  purple: Shades;
};

export const gruvbox: Colors = {
  primary: '#fb4934',
  textPrimary: '#ebdbb2',
  textSecondary: '#ebdbb2',
  bgPrimary: '#282828',
  bgSecondary: '#1d2021',
  bgDark: '#1d2021',
  yellow: {
    50: '#FDF9EC',
    100: '#FBF1D5',
    200: '#F8E5AF',
    300: '#F5D785',
    400: '#F2CA5F',
    500: '#EEBD35',
    600: '#D8A412',
    700: '#A0790D',
    800: '#6C5209',
    900: '#342704',
    950: '#1C1502',
  },
  orange: {
    50: '#FDEDE2',
    100: '#FCDECA',
    200: '#F8BD96',
    300: '#F59C61',
    400: '#F17B2C',
    500: '#D65D0E',
    600: '#AC4C0B',
    700: '#813908',
    800: '#562606',
    900: '#2B1303',
    950: '#130801',
  },
  red: {
    50: '#FFEDEB',
    100: '#FEDBD7',
    200: '#FDB7AF',
    300: '#FD9387',
    400: '#FC6F5F',
    500: '#FB4934',
    600: '#F01C05',
    700: '#B41504',
    800: '#780E02',
    900: '#3C0701',
    950: '#1E0401',
  },
  blue: {
    50: '#EBF4F5',
    100: '#D6E9EA',
    200: '#AED4D6',
    300: '#85BEC1',
    400: '#5DA9AD',
    500: '#458588',
    600: '#376A6C',
    700: '#294F51',
    800: '#1B3536',
    900: '#0E1A1B',
    950: '#070D0E',
  },
  green: {
    50: '#FAFAE1',
    100: '#F5F5C6',
    200: '#ECEC8E',
    300: '#E2E255',
    400: '#D1D124',
    500: '#98971A',
    600: '#7A7A15',
    700: '#5B5B10',
    800: '#3D3D0A',
    900: '#1E1E05',
    950: '#0D0D02',
  },
  cyan: {
    50: '#F3F8F1',
    100: '#E7F2E3',
    200: '#D2E6CB',
    300: '#BBD9B0',
    400: '#A6CD98',
    500: '#8EC07C',
    600: '#6BAC53',
    700: '#4F7F3D',
    800: '#355629',
    900: '#1A2914',
    950: '#0D150A',
  },
  purple: {
    50: '#FBF4F6',
    100: '#F7E9EC',
    200: '#EDCED7',
    300: '#E5B8C4',
    400: '#DC9EAE',
    500: '#D3869B',
    600: '#C05370',
    700: '#993852',
    800: '#652536',
    900: '#34131C',
    950: '#1A0A0E',
  },
};

export const onedark: Colors = {
  primary: '#61afef',
  textPrimary: '#abb2bf',
  textSecondary: '#abb2bf',
  bgPrimary: '#282c34',
  bgSecondary: '#1e2127',
  bgDark: '#1e2127',
  yellow: {
    50: '#FCF9F2',
    100: '#FAF3E5',
    200: '#F5E7CC',
    300: '#EFD8AE',
    400: '#EACC94',
    500: '#E5C07B',
    600: '#D9A33F',
    700: '#AF7E22',
    800: '#775617',
    900: '#3C2B0C',
    950: '#1E1506',
  },
  orange: {
    50: '#FAF5EF',
    100: '#F6EAE0',
    200: '#ECD5C0',
    300: '#E4C3A5',
    400: '#DAAF85',
    500: '#D19A66',
    600: '#C07B3A',
    700: '#915D2C',
    800: '#5E3C1C',
    900: '#2F1E0E',
    950: '#180F07',
  },
  red: {
    50: '#FCF2F3',
    100: '#F9E2E3',
    200: '#F3C4C8',
    300: '#ECA7AC',
    400: '#E68991',
    500: '#E06C75',
    600: '#D43542',
    700: '#A4232D',
    800: '#6E171E',
    900: '#370C0F',
    950: '#1D0608',
  },
  blue: {
    50: '#F1F8FE',
    100: '#DFEFFC',
    200: '#BEDEF8',
    300: '#A2D0F6',
    400: '#82C0F2',
    500: '#61AFEF',
    600: '#2591E9',
    700: '#136EB9',
    800: '#0C4878',
    900: '#06243C',
    950: '#031320',
  },
  green: {
    50: '#F4F9F1',
    100: '#E9F2E3',
    200: '#D6E7CA',
    300: '#C1DBAE',
    400: '#AED095',
    500: '#98C379',
    600: '#77B04F',
    700: '#58823A',
    800: '#3C5827',
    900: '#1D2A13',
    950: '#0E1509',
  },
  cyan: {
    50: '#ECF7F8',
    100: '#DDF0F3',
    200: '#BCE2E7',
    300: '#9AD3DB',
    400: '#78C4CE',
    500: '#56B6C2',
    600: '#3B99A5',
    700: '#2D727C',
    800: '#1E4C52',
    900: '#0F2629',
    950: '#071113',
  },
  purple: {
    50: '#FAF3FC',
    100: '#F3E2F8',
    200: '#E8CAF2',
    300: '#DCAEEA',
    400: '#D295E4',
    500: '#C678DD',
    600: '#AF44D0',
    700: '#8729A3',
    800: '#5B1C6E',
    900: '#2C0D35',
    950: '#18071D',
  },
};

export const solarized: Colors = {
  primary: '#cb4b16',
  textPrimary: '#657b83',
  textSecondary: '#657b83',
  bgPrimary: '#fdf6e3',
  bgSecondary: '#fcf2d8',
  bgDark: '#fcf2d8',
  yellow: {
    50: '#FFF7E0',
    100: '#FFEEBD',
    200: '#FFDE7A',
    300: '#FFCD38',
    400: '#F5B800',
    500: '#B58900',
    600: '#8F6B00',
    700: '#6B5000',
    800: '#473600',
    900: '#241B00',
    950: '#140F00',
  },
  orange: {
    50: '#FCEBE3',
    100: '#FADACC',
    200: '#F4B59A',
    300: '#EE8C63',
    400: '#E96730',
    500: '#CB4B16',
    600: '#A13D11',
    700: '#782D0D',
    800: '#531F09',
    900: '#291004',
    950: '#120702',
  },
  red: {
    50: '#FBE9E9',
    100: '#F8D4D3',
    200: '#F1ADAC',
    300: '#EA8280',
    400: '#E35B59',
    500: '#DC322F',
    600: '#B7211F',
    700: '#871917',
    800: '#5C110F',
    900: '#2C0807',
    950: '#160404',
  },
  blue: {
    50: '#E9F4FB',
    100: '#D4E8F7',
    200: '#A4D0EF',
    300: '#79B9E7',
    400: '#4EA3DF',
    500: '#268BD2',
    600: '#1E6FA8',
    700: '#17537D',
    800: '#0F3652',
    900: '#081C2B',
    950: '#040E16',
  },
  green: {
    50: '#FAFFDB',
    100: '#F5FFB8',
    200: '#ECFF70',
    300: '#E2FF29',
    400: '#C2E000',
    500: '#859900',
    600: '#6A7A00',
    700: '#505C00',
    800: '#353D00',
    900: '#1B1F00',
    950: '#0D0F00',
  },
  cyan: {
    50: '#E7F9F7',
    100: '#CEF2EF',
    200: '#9EE6E0',
    300: '#6DD9D0',
    400: '#3DCCC0',
    500: '#2AA198',
    600: '#228179',
    700: '#19615B',
    800: '#11413D',
    900: '#08201E',
    950: '#04100F',
  },
  purple: {
    50: '#F0F1F9',
    100: '#E2E3F3',
    200: '#C5C7E8',
    300: '#A8AADC',
    400: '#8B8ED0',
    500: '#6C71C4',
    600: '#464BAF',
    700: '#353983',
    800: '#232657',
    900: '#12132C',
    950: '#090916',
  },
};

export const theme: Colors = {
  primary: '#FFC26F',
  textPrimary: '#906c4e',
  textSecondary: '#FFF9F0',
  bgPrimary: '#FFF9F0',
  bgSecondary: '#906c4e',
  bgDark: '#f9e5c6',
  yellow: {
    50: '#FFF9F0',
    100: '#FFF2E0',
    200: '#FFE8C7',
    300: '#FFDBA8',
    400: '#FFCE8A',
    500: '#FFC26F',
    600: '#FFA424',
    700: '#DB8000',
    800: '#945600',
    900: '#472A00',
    950: '#241500',
  },
  orange: {
    50: '#FFF4F0',
    100: '#FFE9E0',
    200: '#FFCFBD',
    300: '#FFBA9E',
    400: '#FFA480',
    500: '#FF8B5D',
    600: '#FF5B1A',
    700: '#D13B00',
    800: '#8A2700',
    900: '#471400',
    950: '#240A00',
  },
  red: {
    50: '#F8EDEC',
    100: '#F3DFDD',
    200: '#E6BBB7',
    300: '#DA9B95',
    400: '#CD776F',
    500: '#C1564C',
    600: '#9F4037',
    700: '#79312A',
    800: '#50201C',
    900: '#2A110E',
    950: '#130807',
  },
  blue: {
    50: '#EBF2F9',
    100: '#D8E5F3',
    200: '#ACC7E7',
    300: '#85ADDB',
    400: '#5D93D0',
    500: '#3876BF',
    600: '#2D609A',
    700: '#214772',
    800: '#162F4B',
    900: '#0C1927',
    950: '#060C14',
  },
  green: {
    50: '#EDF2EE',
    100: '#D8E3D9',
    200: '#B5CAB7',
    300: '#8EAE91',
    400: '#6A956E',
    500: '#4F6F52',
    600: '#405942',
    700: '#2F4231',
    800: '#202D21',
    900: '#0F150F',
    950: '#080C09',
  },
  cyan: {
    50: '#EDF2EE',
    100: '#D8E3D9',
    200: '#B5CAB7',
    300: '#8EAE91',
    400: '#6A956E',
    500: '#4F6F52',
    600: '#405942',
    700: '#2F4231',
    800: '#202D21',
    900: '#0F150F',
    950: '#080C09',
  },
  purple: {
    50: '#EEEBF5',
    100: '#D9D3E9',
    200: '#B3A7D3',
    300: '#8D7BBC',
    400: '#6952A3',
    500: '#4D3C77',
    600: '#3D305F',
    700: '#2E2447',
    800: '#1F182F',
    900: '#0F0C18',
    950: '#09070E',
  },
};

const colors = {
  solarized,
  onedark,
  gruvbox,
  theme,
};

export default colors;
