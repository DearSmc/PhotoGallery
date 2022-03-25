import React from "react";
import CardList from "./Screens/CardList";
import PhotoList from "./Screens/PhotoList";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<CardList />} />
      <Route path="/profile/:id" element={<PhotoList />} />
    </Routes>
  );
}

export default App;
