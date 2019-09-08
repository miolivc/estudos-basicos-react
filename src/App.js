import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nome from './Nome';
import User from './User';
import foto from './user.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu primeiro app React
        </p>
        {/* Um componente pode não conter nenhuma propriedade a ser passada */}
        <Nome nome="miolivc"></Nome>

        <User nome="miolivc"></User>
        <User nome="miolivc" foto={foto}></User>
        <User></User>
      </header>
    </div>
  );
}

export default App;
