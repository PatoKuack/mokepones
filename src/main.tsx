import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './containers/Layout.tsx'
import App from './routes/App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
