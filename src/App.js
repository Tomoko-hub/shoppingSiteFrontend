import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom"

import Register from './pages/user/Register';
import Login from './pages/user/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/user/register' 
          element={<Register />} />
        <Route
          path='/user/login'
          element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
