import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Logements from '../../pages/Logements';

function Router() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logements/:id" element={<Logements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Router;