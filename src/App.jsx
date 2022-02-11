import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.sass';

import { NavBar } from 'components/molecules';

import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="150px" height="150px"/>
        <h1>Pokédex</h1>
      </header>
      <main>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
