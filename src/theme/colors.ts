export type Colors = {
  foreground: string;
  background: string;
  sidebarForeground: string;
  sidebarBackground: string;
  heading: string;
  yellow: string;
  orange: string;
  red: string;
  blue: string;
  green: string;
  cyan: string;
  purple: string;
};

export const gruvbox: Colors = {
  foreground: '#ebdbb2',
  background: '#282828',
  sidebarForeground: '#ebdbb2',
  sidebarBackground: '#1d2021',
  heading: '#8ec07c',
  yellow: '#eebd35',
  orange: '#d65d0e',
  red: '#fb4934',
  blue: '#458588',
  green: '#98971a',
  cyan: '#8ec07c',
  purple: '#d3869b',
};

export const onedark: Colors = {
  foreground: '#abb2bf',
  background: '#282c34',
  sidebarForeground: '#abb2bf',
  sidebarBackground: '#1e2127',
  heading: '#98c379',
  yellow: '#e5c07b',
  orange: '#d19a66',
  red: '#e06c75',
  blue: '#61afef',
  green: '#98c379',
  cyan: '#56b6c2',
  purple: '#c678dd',
};

export const solarized: Colors = {
  foreground: '#657b83',
  background: '#fdf6e3',
  sidebarForeground: '#657b83',
  sidebarBackground: '#fcf2d8',
  heading: '#cb4b16',
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#dc322f',
  blue: '#268bd2',
  green: '#859900',
  cyan: '#2aa198',
  purple: '#6c71c4',
};

export const theme: Colors = {
  foreground: '#906c4e',
  background: '#FFF9F0',
  sidebarBackground: '#906c4e',
  sidebarForeground: '#FFF9F0',
  heading: '#A26952',
  yellow: '#FFC26F',
  orange: '#FF8B5D',
  red: '#C1564C',
  blue: '#3876BF',
  green: '#4F6F52',
  cyan: '#00917D',
  purple: '#4D3C77',
};

const colors = {
  solarized,
  onedark,
  gruvbox,
  theme,
};

export default colors;
