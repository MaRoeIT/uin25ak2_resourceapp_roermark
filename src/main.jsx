import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

/**
 * The base index.css file have been removed.
 * all it's styling and have been moved to main.scss and been changed to fit this page.
 */
import './styles/main.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  /**
   * Changed StrictMode to BrowserRouter to get acces to react-router-dom functionality.
   */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
