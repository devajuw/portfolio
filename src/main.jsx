  // import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './css/globals.css'
  import App from './App.jsx'
  import ErrorBoundary from './components/ErrorBoundary.jsx'

const domNode = document.getElementById('root')  // grab the div
const root = createRoot(domNode)                 // create a React root
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)       
   