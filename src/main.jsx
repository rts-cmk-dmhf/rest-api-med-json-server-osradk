import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Listevisning from "./pages/Listevisning.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<App />}>
      <Route index element={<Listevisning />}  />
   
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);






