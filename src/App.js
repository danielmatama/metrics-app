import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:coinId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
