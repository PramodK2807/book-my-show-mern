import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Auth';
import { SearchProvider } from './context/Search';
import { CartProvider, WishlistProvider } from './context/WishList';
import { MovieProvider } from './context/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <MovieProvider>
      <WishlistProvider>
        <SearchProvider>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </SearchProvider>
      </WishlistProvider>
    </MovieProvider>
  </AuthProvider>


);


