import '@fontsource/rochester';
import '@fontsource-variable/playfair-display';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './app/store';

// TODO: CREATE TOOL-BAR COMPONENT
// TODO: GITHUB ACTION TO BUILD FOR MACOS, LINUX, WINDOWS
// TODO: CODE REFACTOR
// PERF: TRY INCREASE PERFORMANCE

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
