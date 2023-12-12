import { extendTheme } from '@chakra-ui/react';
import styles from './global-css';
import colors from './colors';
import components from './components';
import fonts from './fonts';

export type Themes = 'gruvbox' | 'onedark' | 'solarized' | 'theme';

const common = {
  fonts,
  components,
  styles,
};

const gruvbox = extendTheme({
  ...common,
  colors: colors.gruvbox,
});

const onedark = extendTheme({
  ...common,
  colors: colors.onedark,
});

const solarized = extendTheme({
  ...common,
  colors: colors.solarized,
});

const theme = extendTheme({
  ...common,
  colors: colors.theme,
});

const themes = {
  gruvbox,
  onedark,
  solarized,
  theme,
};

export default themes;
