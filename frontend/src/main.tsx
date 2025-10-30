import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { FavoritesProvider } from './contexts/FavoritesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </Provider>
  </StrictMode>,
)
