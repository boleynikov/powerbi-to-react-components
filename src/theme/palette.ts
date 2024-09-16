import { PaletteOptions } from '@mui/material';

const createGradient = (from: string, to: string, rotation?: number) =>
  `linear-gradient(${rotation || 90}deg, ${from}, ${to})`;

const Common = {
  Black: '#000000',
  White: '#FFFFFF'
};

const Background = {
  dark: Common.Black,
  default: Common.White,
  paper: '#E7EEF3',
  light: '#F1F1F1',
  disabled: '#cccccc'
};

const Text = {
  primary: Common.Black,
  secondary: '#808080',
  light: '#80808080'
};

const Success = {
  main: '#04C65D',
  light: '#04C65D66',
  lighter: '#04C65D33'
};

const Warning = {
  main: '#FFDB4D',
  light: '#FFDB4D66',
  lighter: '#FFDB4D33'
};

const Error = {
  main: '#FF3800',
  lighter: '#FF380099',
  alt: '#FF831A'
};

const Info = {
  main: '#007EFF',
  light: '#007EFF99',
  lighter: '#007EFF66',
  lightest: '#007EFF33',
  alt: '#5B5AFF'
};

const Gradient = {
  main: (rotation: number) => createGradient('#66B1FF', '#D7F64D', rotation),
  light: (rotation: number) => createGradient('#66B1FF99', '#D7F64D99', rotation),
  lighter: (rotation: number) => createGradient('#66B1FF33', '#D7F64D33', rotation)
};

const palette: PaletteOptions = {
  primary: {
    main: Common.Black,
    light: Common.White
  },
  secondary: {
    main: Common.Black,
    light: Common.White
  },
  background: Background,
  bg: Background,
  text: Text,
  success: Success,
  warning: Warning,
  error: Error,
  info: Info,
  gradient: Gradient
};

export default palette;
