import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './main.css'
import {RouterProvider} from "react-router";
import {router} from "@src/router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
