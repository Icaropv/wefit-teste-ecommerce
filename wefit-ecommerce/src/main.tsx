
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster 
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#10b981',
          color: '#fff',
          borderRadius: '8px',
          fontWeight: '500',
        },
        error: {
          style: {
            background: '#ef4444',
          },
        },
        loading: {
          style: {
            background: '#3b82f6',
          },
        },
      }}
    />
  </React.StrictMode>
)