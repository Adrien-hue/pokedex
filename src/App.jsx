import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.sass';

import { NavBar } from 'components/molecules';

import Listing from './containers/Listing';
import Pokemon from 'containers/Pokemon';
import Type from 'containers/Type';

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
          <Route path='/' element={<Listing />} />
          <Route path='pokemon/:name' element={<Pokemon />} />
          <Route path='type' element={<Type />} />
          <Route path='type/:type' element={<Listing />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
