import Home from './views/home';
import Foods from './views/foods';
import TestF from './views/test-functional';
import TestC from './views/test-class';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App(){
  
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods/:id" element={<Foods />} />
          <Route path="/testf" element={<TestF />} />
          <Route path="/testc" element={<TestC />} />
        </Routes>
      </div>
    );
  
}

