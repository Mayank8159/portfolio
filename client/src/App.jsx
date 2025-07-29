import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/Notfound.jsx'

export const App = () => {
  return (
   <>
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