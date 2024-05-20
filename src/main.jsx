import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { PersistGate } from 'redux-persist/integration/react'
import {
  store, persistor,
  
 } from './redux/store'
import './index.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    
  </Provider>
  
  </React.StrictMode>
)
