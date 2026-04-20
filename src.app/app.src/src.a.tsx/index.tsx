import i18n from "./tsx.items/language.config.ts"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react";
import RouterRendering from './main.tsx';

fetch('/api/ip.ts')
  .then(res => res.json())
  .then(data => {
    console.log('IP:', data);
  })
  .catch(err => {
    console.log('ERROR:', err);
  });
const container = document.querySelector('.main');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
  <StrictMode>
    <RouterRendering />
    <Analytics />
  </StrictMode>
);