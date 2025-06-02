import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {App} from './App.jsx'

//? import bootstrap link  for css & js 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
//?  import bootstrap-icon link
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
