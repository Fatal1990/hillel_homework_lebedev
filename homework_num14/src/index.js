import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import User from './components/User';
import CreateUser from './components/CreateUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='users' element={<UsersList />} />
      <Route path='user/create' element={<CreateUser />} />
      <Route path='user/:id' element={<User />} />
    </Routes>
  </BrowserRouter>,
);
