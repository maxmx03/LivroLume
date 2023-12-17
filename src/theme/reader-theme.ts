import { IReactReaderStyle, ReactReaderStyle } from 'react-reader';
import { Rendition } from 'epubjs';
import { Colors } from './colors';

const important = (property: string) => property + ' !important';

export const defineTheme = (colors: Colors) => {
  return {
    ['h1, h2, h3, h4, h5, h6']: {
      color: important(colors.primary),
      ['font-weight']: 'bold',
    },
    ['body, html, div, p, span']: {
      color: important(colors.textPrimary),
    },
    ['strong, b, em']: {
      color: important(colors.green[500]),
    },
    ['a']: {
      color: important(colors.purple[500]),
    },
    ['aside']: {
      color: important(colors.textPrimary),
      background: important(colors.bgDark),
    },
    ['tr:nth-child(even)']: {
      background: important(colors.bgDark),
    },
    ['code, pre']: {
      overflow: 'auto',
      'text-indent': '0rem',
      color: important(colors.textPrimary),
      background: important(colors.bgDark),
    },
  };
};

const readerTheme = (
  colors: Colors,
  rendition: Rendition
): IReactReaderStyle => {
  const theme = defineTheme(colors);
  rendition.themes.default(theme);

  return {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      boxShadow: 'none',
      color: colors.purple[500],
    },
    readerArea: {
      ...ReactReaderStyle.readerArea,
      backgroundColor: colors.bgPrimary,
      transition: undefined,
    },
    tocArea: {
      ...ReactReaderStyle.tocArea,
      left: 'auto',
      backgroundColor: colors.bgPrimary,
      height: 'auto',
      whiteSpace: 'unset',
    },
    tocButtonExpanded: {
      ...ReactReaderStyle.tocButtonExpanded,
      backgroundColor: colors.bgPrimary,
      borderRadius: '7px',
    },
  };
};

export default readerTheme;
