import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  i18n from './i18n'; // Importamos la config de diccionario de lenguaje
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
