import React from 'react';
import { createRoot } from 'react-dom/client';
import Page from './page.js';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
