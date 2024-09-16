import { ThemeOptions } from '@mui/material';
// import { CSSProperties } from 'react';

export function remToPx(value: number) {
  return Math.round(value * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  xs,
  sm,
  md,
  lg
}: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    '@media (max-width:600px)': {
      fontSize: pxToRem(xs)
    },
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  };
}

const FONT_PRIMARY = 'e-Ukraine, Public Sans, sans-serif';

type Typography = PropType<ThemeOptions, 'typography'>;
// type Palette = PropType<ThemeOptions, 'palette'>;

const typography: Typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: 38,
    lineHeight: 40 / 38,
    fontWeight: 400
  },
  h2: {
    fontSize: 20,
    lineHeight: 24 / 20,
    fontWeight: 400
  },
  h3: {
    fontSize: 18,
    lineHeight: 24 / 18,
    fontWeight: 400
  },
  h4: {
    fontSize: 18,
    lineHeight: 24 / 18,
    fontWeight: 300
  },
  h5: {
    fontSize: 16,
    lineHeight: 24 / 16,
    fontWeight: 400
  },
  body1: {
    fontSize: 16,
    lineHeight: 24 / 16,
    fontWeight: 300
  },
  body2: {
    fontSize: 12,
    lineHeight: 16 / 12,
    fontWeight: 400
  },
  caption: {
    fontSize: 12,
    lineHeight: 16 / 12,
    fontWeight: 300
  },
  caption1: {
    fontSize: 10,
    lineHeight: 16 / 10,
    fontWeight: 400
  },
  welcome: {
    fontSize: 65,
    lineHeight: 65 / 48,
    fontWeight: 400,
    ...responsiveFontSizes({ xs: 24, sm: 38, md: 48, lg: 65 })
  }
};

export default typography;
