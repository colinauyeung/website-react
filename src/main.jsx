import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ProjectBlock from './ProjectBlock.jsx'
import ProjectPage from './TempProjectPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProjectPage />
  </StrictMode>,
)
