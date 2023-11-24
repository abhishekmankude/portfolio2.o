import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import Quali from './components/Quali';
import Footer from './components/Footer';
function App() {
  return (
   <div className="App">
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Quali' element={<Quali/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  
   </div>
  );
}

export default App;
