import React from "react"
import store from "./redux/store"
import { Provider } from "react-redux"
import './App.css'

import Home from "./pages/Home";
import Car from "./pages/Car";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cars' element={<Car />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
