import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from '../pages/home/Home'

//styles
import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
