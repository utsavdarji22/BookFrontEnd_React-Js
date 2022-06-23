import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBooks from './Comp/AllBooks';
import Layout from './Comp/Layout';
import AddBook from './Comp/AddBook';
import UpdateBook from './Comp/UpdateBook';
import DeleteBook from './Comp/DeleteBook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllBooks />} />
          <Route path="/Add" element={<AddBook />} />
          <Route path="/Update" element={<UpdateBook />} />
          <Route path='/Delete' element={<DeleteBook />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
