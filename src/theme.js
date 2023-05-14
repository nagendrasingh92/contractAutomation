/* eslint-disable import/prefer-default-export */
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1AA262',
    },
    secondary: {
      main: '#fff',
    },
    customColor: {
      primaryWhite: '#FFFFFF',
      primaryYellow: '#F69824',
      primaryTransparent: 'transparent',
      secondaryWhite: '#F2F2F2',
      secondaryGreyText: '#A6A6A6',
      tertiaryGreyText: '#A1A1A1',
      secondaryTwo: '#EAEAEA',
      secondaryThree: '#3F3F3F',
      secondaryFour: '#262626',
      stateLinks: '#63BDFF',
      stateError: '#DA3333',
      secondayLinks: '#1976D2',
    },
    boxShadow: {
      main: '0px 7px 10px rgba(40, 41, 61, 0.08)',
    },
  },
});