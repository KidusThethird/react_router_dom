
import './App.css';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { Menu } from './pages/menu';
import { Nav } from './pages/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
    <Router>
        <Nav />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/menu" element={<Menu />}/>
        <Route  path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
