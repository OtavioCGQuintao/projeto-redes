import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Builder from './components/Builder'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Builder/>
  </StrictMode>,
)
