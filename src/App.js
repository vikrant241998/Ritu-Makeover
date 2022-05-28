import './App.css';
import NavbarLink from './Components/NavbarLink';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarLink />
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='about' element={<About/> } />
          <Route path='portfolio' element={<Portfolio/> } />
          <Route path='services' element={<Services/> } />
          <Route path='contact' element={<Contact/> } />
          <Route path='resume' element={<Resume/> } />
        </Routes>

      </BrowserRouter>
 
    </div>
  );
}

export default App;
