import { GlobalStyles as MUIGlobalStyles, Theme } from '@mui/material';
import { webkitScrollBar, webkitScrollBarThumb, webkitScrollBarTrack } from './scroll';

type GlobalStylesProps = {
  theme: Theme;
};

const GlobalStyles = ({ theme }: GlobalStylesProps) => {
  return (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
          '& .Toastify__toast-body': {
            fontFamily: 'e-Ukraine',
            fontSize: '12px'
          }
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white'
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        '@keyframes granimate': {
          '0%, 100%': {
            backgroundPosition: '0 25%'
          },
          '25%, 75%': {
            backgroundPosition: '50% 50%'
          },
          '50%': {
            backgroundPosition: '100% 100%'
          }
        },
        '.MuiButton-root .svgr-icon': {
          path: {
            stroke: 'currentColor',
            strokeWidth: '2px'
          }
        },
        '.MuiAutocomplete-paper': {
          backgroundColor: theme.palette.background.default,
          marginTop: 8,
          borderRadius: 0,
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          paddingTop: 0,
          paddingBottom: 0,
          '.MuiAutocomplete-listbox': {
            display: 'flex',
            gap: theme.spacing(2),
            flexDirection: 'column',
            '.MuiAutocomplete-option': {
              ...theme.typography.body1,
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: theme.shape.borderRadius
            }
          }
        },
        '::-webkit-scrollbar': webkitScrollBar,
        '::-webkit-scrollbar-track': webkitScrollBarTrack,
        '::-webkit-scrollbar-thumb': webkitScrollBarThumb,
        '::-webkit-scrollbar-thumb:hover': { background: '#ccc' },
        '::WebkitScrollbarThumb:active': 'linear-gradient(left, #22add4, #1e98ba)',
        '.tox-notifications-container': {
          visibility: 'hidden !important'
        }
      }}
    />
  );
};

export default GlobalStyles;
