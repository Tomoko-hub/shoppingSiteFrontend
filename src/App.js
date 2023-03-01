import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom"

import Register from './pages/user/Register';
import Login from './pages/user/Login';
import ReadAll from './pages/item/ReadAll';
import ReadSingle from './pages/item/ReadSingle';
import Create from './pages/item/Create';

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
        <Route
          path="/"
          element={<ReadAll />} />
        <Route
          path="/item/:id"
          element={<ReadSingle />} />
        <Route
          path="/item/create"
          element={<Create />}
         />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
