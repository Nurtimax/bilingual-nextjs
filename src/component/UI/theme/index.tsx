import { createTheme, ThemeProvider } from '@mui/material'
import { FC, ReactNode } from 'react'

interface ThemeProps {
   children: ReactNode
}

declare module '@mui/material/Button' {
   interface ButtonPropsVariantOverrides {}
}

const Theme: FC<ThemeProps> = ({ children }) => {
   /* 
   * Default breakpoints
   Each breakpoint (a key) matches with a fixed screen width (a value):

   * xs, extra-small: 0px
   * sm, small: 600px
   * md, medium: 900px
   * lg, large: 1200px
   * xl, extra-lerge: 1536px 
    
    */

   const theme = createTheme({
      components: {
         MuiContainer: {
            styleOverrides: {
               maxWidthLg: {
                  '&.MuiContainer-maxWidthLg': {
                     maxWidth: '95%',
                  },
               },
               maxWidthMd: {
                  '&.MuiContainer-maxWidthMd': {
                     maxWidth: '90%',
                  },
               },
            },
         },
      },
      palette: {
         primary: {
            main: '#3A10E5',
            light: '#ffffff',
            dark: '#D7E1F8',
            A100: '#4C4859',
         },
         secondary: {
            main: '#0F85F1',
            light: '#3752B4',
            A100: '#D4D0D0',
            A200: '#D8D9DB',
            A400: '#F7F7F7',
            dark: '#757575',
         },
         error: {
            main: '#F61414',
         },
         common: {
            white: '#ffffff',
            black: '#23212A',
         },
         background: {
            default: '#C4C4C4', //
            paper: 'linear-gradient(270deg, #3A10E5 0%, #6746EF 75.83%)',
         },
         action: {
            disabled: '#C4C4C4',
            active: '#3A10E5',
         },
         text: {
            primary: '#ffffff',
            secondary: '#3A10E5',
            disabled: '#9A9A9A',
         },
         success: {
            main: '#2AB930',
            dark: '#666CA7',
            light: '#FE9102',
            contrastText: '#FEF5E8',
            A700: 'linear-gradient(270deg, #C23677 0%, #C5397A 27.92%, #C43879 64.37%, #BB2E6F 100%)',
         },
      },
   })
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme