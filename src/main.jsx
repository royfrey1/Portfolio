import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics';
import './index.css'
import  i18n from './i18n'; // Importamos la config de diccionario de lenguaje
import App from './App.jsx'
inject();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
