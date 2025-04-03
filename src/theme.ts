import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Niebieski
    },
    secondary: {
      main: '#dc004e', // Różowy
    },
    background: {
      default: '#f5f5f5', // Jasnoszary
      paper: '#ffffff', // Biały
    },
    text: {
      primary: '#333333', // Ciemnoszary
      secondary: '#555555', // Szary
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  spacing: 8, // Bazowa jednostka odstępów
});

export default theme;