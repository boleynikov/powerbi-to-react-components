import { Theme, alpha } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    twoTone: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    toolbar: true;
  }
}

export default function button(theme: Theme) {
  return {
    styleOverrides: {
      root: {
        ...theme.typography.h5,
        textTransform: 'none',
        boxShadow: 'none',
        ':hover, :active': {
          boxShadow: 'none'
        }
      },
      sizeMedium: {
        padding: '16px 30px',
        height: 56,
        borderRadius: 28,
        ...theme.typography.h5
      },
      sizeSmall: {
        padding: '6px 20px',
        height: 36,
        borderRadius: 18,
        ...theme.typography.body2
      },
      contained: {
        backgroundImage: theme.palette.gradient.main(-90),
        zIndex: 1,
        backgroundSize: '200% 300%',
        animation: '15s linear 0s infinite alternate none running granimate',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: '-1px',
          right: '-1px',
          bottom: '-1px',
          top: '-1px',
          margin: 'auto',
          opacity: 1,
          visibility: 'visible',
          zIndex: -1,
          borderRadius: '40px',
          backgroundColor: theme.palette.common.black,
          transition: '.2s ease-in-out'
        },
        '&:hover': {
          '&:before': {
            opacity: 0,
            visibility: 'hidden'
          },
          backgroundColor: 'transparent',
          color: theme.palette.common.black
        },
        '&.Mui-disabled': {
          color: theme.palette.primary.light,
          '&:before': {
            backgroundColor: theme.palette.background.disabled
          }
        }
      },
      containedSizeMedium: {
        height: 54
      },
      containedSizeSmall: {
        height: 34
      },
      outlined: {
        border: '2px solid',
        borderColor: theme.palette.common.black,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '1px',
          left: '0px',
          right: '0px',
          bottom: '1px',
          borderRadius: '50px'
        },
        '&:hover': {
          border: 'none',
          marginLeft: '2px',
          marginRight: '2px',
          '&:before': {
            border: '2px solid transparent',
            background: `${theme.palette.gradient.main(-90)} border-box`,
            backgroundSize: '200% 300%',
            animation: '15s linear 0s infinite alternate none running granimate',
            WebkitMask: `${theme.palette.gradient.main(
              -90
            )} padding-box, \n    linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude'
          }
        },
        '&:disabled, &.Mui-disabled': {
          borderWidth: '2px',
          color: theme.palette.bg.disabled,
          borderColor: theme.palette.bg.disabled
        }
      },
      outlinedSizeMedium: {
        height: 52
      },
      outlinedSizeSmall: {
        height: 36
      }
    },
    variants: [
      {
        props: { variant: 'twoTone' },
        style: {
          border: '2px solid',
          borderColor: theme.palette.common.black,
          '&:disabled, &.Mui-disabled': {
            color: theme.palette.bg.disabled,
            borderColor: theme.palette.bg.disabled,
            backgroundColor: 'transparent'
          }
        }
      },
      {
        props: { variant: 'twoTone', color: 'success' },
        style: {
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.6)
          }
        }
      },
      {
        props: { variant: 'twoTone', color: 'error' },
        style: {
          backgroundColor: theme.palette.error.lighter,
          '&:hover': {
            backgroundColor: theme.palette.error.light
          }
        }
      }
    ]
  };
}
