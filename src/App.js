
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Seeall from './Pages/Seeall';
import Moviedetail from './Pages/Moviedetail';
import Wishlist from './Pages/WishList';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SearchPage from './Pages/SearchPage';
import Category from './Pages/Category';
import PageNotFound from './Pages/PageNotFound';
import Watch from './Pages/Watch';

function App() {
  return (
    <Routes >
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/seeall' element={<Seeall/>} />
      <Route exact path='/wishlist' element={<Wishlist/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/signup' element={<Register/>} />
      <Route exact path='/search' element={<SearchPage/>} />
      <Route exact path='/movie/detail/:id' element={<Moviedetail/>} />
      <Route exact path='/categories/:id' element={<Category/>} />
      <Route exact path='*' element={<PageNotFound/>} />
      <Route exact path='watch' element={<Watch/>} />
    </Routes>
  );
}

export default App;
