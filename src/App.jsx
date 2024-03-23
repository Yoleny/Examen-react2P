import React from 'react'
import { Registro } from './components/RegistroUsuario';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioSesion } from './components/InicioSesion';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<InicioSesion/>} />
        <Route path='/registro' element = {<Registro/>} />

      </Routes>
    </BrowserRouter>

    //<Registro />
  )
}

export default App; 
