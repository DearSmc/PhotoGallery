import React from "react";
import CardList from "./Screens/CardList";
import PhotoList from "./Screens/PhotoList";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<CardList />} />
      <Route path='/profile' element={<PhotoList />} />
    </Routes>
  );
}

export default App;
