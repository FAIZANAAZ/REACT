import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // strictmode ka matlb he wo type wagera sbko handle krta he or inspect me ye 2 bar har code ko run krta he iska koi faida ni he bs esy hi
  
  <StrictMode>
    <App />
  </StrictMode>,
)
