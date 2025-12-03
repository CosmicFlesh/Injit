import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProdu from './AppProdu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProdu />
  </StrictMode>,
)



