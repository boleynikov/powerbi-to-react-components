// import { Theme } from '@mui/material';

export default function textField() {
// theme: Theme
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiFormLabel-root svg': {
            opacity: 1,
            transition: 'opacity .1s ease-in',
            width: 20,
            height: 20
          },
          '.MuiFormLabel-root.MuiInputLabel-shrink svg': {
            opacity: 0
          },
          '.MuiFormLabel-root.MuiInputLabel-shrink:has(svg)': {
            transform: 'translate(-17px, -1.5px) scale(0.75)'
          },
          '.MuiFormLabel-root:has(svg)': {
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            '& svg': {
              marginTop: '-1px'
            }
          }
        }
      }
    }
  } as const;
}
