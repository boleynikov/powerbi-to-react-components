import { Theme } from '@mui/material';

export default function input(theme: Theme) {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          ...theme.typography.h5,
          '& .MuiInputBase-input': {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            color: theme.palette.text.primary,
            '&::placeholder': {
              color: theme.palette.text.secondary,
              opacity: 1
            }
          },
          '& .MuiSelect-select': {
            background: 'none !important'
          },
          '& .MuiSelect-nativeInput::placeholder': {
            color: theme.palette.text.secondary,
            opacity: 1  
          }
        },
        underline: {
          ...theme.typography.h5,
          borderBottom: theme.palette.common.black,
          '&:after': {
            border: 'none !important',
            height: '2px',
            opacity: '0',
            transition: 'opacity .1s ease-in'
          },
          '&.Mui-focused': {
            '&:after': {
              border: 'none !important',
              height: '2px',
              opacity: '1',
              backgroundImage: theme.palette.gradient.main(90)
            }
          },
          '& .MuiInputAdornment-root .svgr-icon': {
            height: '20px',
            width: '20px'
          }
        }
      }
    }
  } as const;
}
