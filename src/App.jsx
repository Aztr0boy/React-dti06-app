import { BrowserRouter, Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "./assets/Views/Home";
import MypageA from "./assets/Views/MypageA";
import MypageB from "./assets/Views/MypageB";
import MypageC from "./assets/Views/MypageC";
import MypageD from "./assets/Views/MypageD";
import NotFound from "./assets/Views/NotFound";


export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/MypageA" element={<MypageA />}/>
          <Route path="/MypageB" element={<MypageB />}/>
          <Route path="/MypageC" element={<MypageC />}/>
          <Route path="/MypageD" element={<MypageD />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}
