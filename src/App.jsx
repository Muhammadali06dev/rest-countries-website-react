import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
// Layout 
import RootLayout from "./layout/RootLayout"
// Pages 
import Home from "./pages/home/Home"
import Country from './pages/country/Country'



function App() {
  console.log("App is working...")
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="country/:id" element={<Country />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routes} />

  )
}

export default App
