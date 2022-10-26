import React from 'react';
import FlightsList from '../ListStatus/ListStatus';
import Header from '../Header/Header';
import {Routes, Route} from "react-router-dom";
import TrainingMaterial from '../TrainingMaterial/TrainingMaterial';

function App() {
  return (
      <>
        <Header/>
        <main>
        <Routes>
          <Route path='/' element={<FlightsList/>}/>
          <Route path='/training-material' element={<TrainingMaterial/>}/>
        </Routes>
        </main>
      </>
  );
}

export default App;
