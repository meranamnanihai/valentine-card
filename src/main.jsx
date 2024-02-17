import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Card from './components/card.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const router = createBrowserRouter([
  {
    path:"/",
    element : <App></App>
  },
  {
    path:"/:name",
    element: <Card></Card>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
