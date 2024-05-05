import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Route,Routes, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import HomeLeyout from './Leyouts/HomeLeyout';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Pages/Home/Home';

const queryClient = new QueryClient();
const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="" element={<HomeLeyout />}>
        <Route index={true} element={<Home />} />
    </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </React.StrictMode>
);