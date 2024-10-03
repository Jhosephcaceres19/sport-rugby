import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Routes } from './routes/Routes.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
);
