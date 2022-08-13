import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Colors } from './theme/Color';
import { ThemeProvider } from './theme/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Colors>
        <App />
      </Colors>
    </ThemeProvider>
  </React.StrictMode>,
);
