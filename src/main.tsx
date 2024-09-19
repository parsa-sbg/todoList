import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvider } from './contexts/TodosContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>,
)
