import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDom from 'react-dom';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './pages/Projects.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element :<App/> 
  },
  {
    path : "/Projects",
    element :<Projects/> 
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
