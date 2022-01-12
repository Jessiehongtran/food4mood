import Home from './views/home';
import Foods from './views/foods';
import FoodDetail from './views/foodDetail';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App(){
  
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods/:id" element={<Foods />} />
          <Route path="/food/detail/:id" element={<FoodDetail />} />
        </Routes>
      </div>
    );
  
}

