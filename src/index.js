import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';
import Menu from './pages/menu';
import Login from './pages/login';
import Home from './pages/home';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cadastrar' element={<Cadastrar/>}></Route>
        <Route path='/consultar' element={<Consultar/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


