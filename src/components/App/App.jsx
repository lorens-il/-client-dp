import React from 'react';
import ListStatus from '../pages/ListStatus/ListStatus';
import Header from '../Header/Header';
import {Routes, Route} from "react-router-dom";
import TrainingMaterial from '../TrainingMaterial/TrainingMaterial';
import ListStatusReparedHardware from '../ListStatusReparedHardware/ListStatusReparedHardware';
import ListStatusOrderedHardware from '../ListStatusOrderedHardware/ListStatusOrderedHardware';
import AboutCompany from '../pages/AboutCompany/AboutCompany';
import Auth from '../pages/Auth/Auth';
import jwtDecode from "jwt-decode"

function App() {
  return (
      <>
        <Header/>
        <main>
        <Routes>
            <Route path='/' element={<Auth/>}/>
            <Route 
                path='/status-repaired-hardware' 
                element={
                    <ListStatus >
                        <ListStatusReparedHardware/>
                    </ListStatus>}
            />
            <Route 
                path='/status-ordered-hardware' 
                element={
                    <ListStatus>
                        <ListStatusOrderedHardware/>
                    </ListStatus>}
            />
            <Route path='/training-material' element={<TrainingMaterial/>}/>
            <Route path='/about' element={<AboutCompany/>}/>
        </Routes>
        </main>
      </>
  );
}

export default App;
