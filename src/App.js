import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Dart from './pages/Dart';
import Table from './pages/Table';


import './assets/app.css';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Dart/>} index />
              <Route path='/table' element={<Table/>}/>
          </Routes>
   </BrowserRouter>
  );
}

export default App;
