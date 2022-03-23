import React from "react";
import CardList from "./Screens/CardList";
import PhotoList from "./Screens/PhotoList";
import { Routes, Route, Link } from "react-router-dom";
import { SignupForm } from "./Screens/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/profile" element={<PhotoList />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
