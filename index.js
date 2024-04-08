import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import Layout from './Layout';
import Home from './Home';
import Chat from './chat';
import Color from './Color';
import Todo from './Todo'
import Form from './Form';
import redux from './store/slices/path.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './store/index'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
      <Provider store={store}>
    <BrowserRouter>
    <Routes>

    <Route  path='/home' element={<Home />}/>
      <Route path="blogs" element={<Main />}/>
      <Route path="/" element={<Layout />}/>
      <Route path="/chat" element={<Chat />}/>
      <Route path="/color" element={<Color />}/>
      <Route path="/Todo" element={<Todo />}/>
      <Route path="/Form" element={<Form />}/>
      </Routes>

</BrowserRouter>
<App/>
</Provider>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
