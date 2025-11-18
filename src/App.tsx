import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      {/*<Navbar/>*/}
      <Routes>
        <Route path='/portfolio' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

