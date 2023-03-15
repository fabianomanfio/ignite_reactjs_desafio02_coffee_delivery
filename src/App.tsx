import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { OrderContextProvider } from './contexts/OrderContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
