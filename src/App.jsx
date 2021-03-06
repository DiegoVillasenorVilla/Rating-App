import React from 'react';
//import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Thanks } from './Pages/thanks/thanks';
import {Rating} from "./Pages/rating/rating"


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route  path="/Rating-App/" element={<Rating/> } />
           <Route path="/Rating-App/Thanks" element={<Thanks/> } />
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App
