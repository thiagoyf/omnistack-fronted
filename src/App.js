import React, { Component } from 'react';
import './App.css';

import Routes from './routes';

class App extends Component {
  render() {
    return <Routes />;
  }
}

// Poder ser traduzido para, pois é um componente
// que não guarda estado e é muito simples.
//
// const App = () => <Main />;

export default App;
