
import './App.css';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Nav } from './pages/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";




function App() {



 const client = new QueryClient();

  return (
    <div className="App" >
    <QueryClientProvider client={client}>
    <Router>
        <Nav />
      <Routes>
        <Route  path="/" element={<Home  />}/>
        <Route  path="/profile" element={<Profile  />}/>
        <Route  path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>
  
    </QueryClientProvider>
    </div>
  );
}

export default App;
