import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import TestEvent from './components/TestEvent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestEvent />
  </StrictMode>,
)
