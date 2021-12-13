import * as React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import WorldMap from './pages/WorldMap/Worldmap';
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import NoMatch from "./pages/NoMatch/NoMatch";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import MyNotes from "./pages/MyNotes/MyNotes";

export default function App() {

  return (
    <div className="App">
      <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="map" element={<WorldMap />} />
          <Route path="login" element={<Login />} />
          <Route path="mynotes" element={<MyNotes />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </div>
    </div>
  );
}
