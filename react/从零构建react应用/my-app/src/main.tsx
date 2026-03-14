import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import TestEvent from './components/TestEvent.tsx'
import TestSetState from './components/TestSetState.tsx'
import TestContext from './components/TestContext.tsx'
import TestUseDeferredValue from './components/TestUseDeferredValue.tsx'
import TestTransition from './components/TestTransition.tsx'
import TestWillUnmount from './components/TestWillUnmount.tsx'
import TestErrorBoundary from './components/TestErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestErrorBoundary />
  </StrictMode>,
)
