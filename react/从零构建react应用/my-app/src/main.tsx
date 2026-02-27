import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import TestEvent from './components/TestEvent.tsx'
import TestSetState from './components/TestSetState.tsx'
import TestContext from './components/TestContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestContext />
  </StrictMode>,
)
