import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Message from './Message';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from './components/ListGroup';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Message/>
    <ListGroup/>
  </React.StrictMode>,
)
