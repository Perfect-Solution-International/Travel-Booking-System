"use client";
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import Footer from './Footer';

const theme = createTheme({
  palette: { primary: { main: '#0056D2' } },
  typography: {
    fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    h6: { fontFamily: 'Noto Serif, serif', fontWeight: 800 }
  }
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}