import { CssBaseline, ThemeProvider as TP } from '@mui/material';
import { ReactNode } from 'react';
import { darkTheme } from './Theme';

export interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return (
    <TP theme={darkTheme}>
      <CssBaseline />
      {children}
    </TP>
  );
};
