import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

import('./App.css')
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {

  return (
    <div className='App'>
      <h2>Product Manager</h2>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<Detail />} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

