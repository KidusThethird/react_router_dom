
import './App.css';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Nav } from './pages/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, createContext } from "react";


export const AppContext = createContext();

function App() {

  const[username, setUsername] = useState("Kidus");

  return (
    <div className="App" >
     <AppContext.Provider value={{username, setUsername}}>
    <Router>
        <Nav />
      <Routes>
        <Route  path="/" element={<Home  />}/>
        <Route  path="/profile" element={<Profile  />}/>
        <Route  path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>
    </AppContext.Provider>

    </div>
  );
}

export default App;
