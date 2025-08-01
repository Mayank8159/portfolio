import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Toaster } from "@/components/ui/toaster";

export const App = () => {
  return (
   <>
   <Toaster />
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App