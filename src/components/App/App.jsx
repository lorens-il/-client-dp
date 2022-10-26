import React from 'react';
import FlightsList from '../ListStatus/ListStatus';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main>
            <Routes>
              <Route path='/' element={<FlightsList/>}/>
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
