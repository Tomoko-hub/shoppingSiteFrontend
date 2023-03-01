import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom"

import Register from './pages/user/Register';
import Login from './pages/user/Login';
import ReadAll from './pages/item/ReadAll';
import ReadSingle from './pages/item/ReadSingle';
import Create from './pages/item/Create';
import Update from './pages/item/Update';
import Delete from './pages/item/Delete';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
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
          <Route
            path="/item/update/:id"
            element={<Update />}
          />
          <Route
            path='/item/delete/:id'
            element={<Delete />}
          />
        </Routes>
        <Footer  />
      </div>
    </BrowserRouter>
  );
}

export default App;
