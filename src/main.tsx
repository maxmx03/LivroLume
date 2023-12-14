import '@fontsource/rochester';
import '@fontsource-variable/playfair-display';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './app/store';

// INFO: MAYBE CREATE FILE-OPTIONS COMPONENT
// TODO: CREATE LIB BROWSE-EPUB
// TODO: CREATE BOOK-PAGE
// TODO: CREATE BOOK FEATURE REDUCER AND PAGE
// TODO: CREATE TOOL-BAR COMPONENT
// TODO: CREATE SETTINGS FEATURE PAGE
// TODO: GITHUB ACTION TO BUILD FOR MACOS, LINUX, WINDOWS

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
