import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomeView from "./Pages/HomeView";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Components/Contact";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routes>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
      <Contact />
    </AppContainer>
  );
}

export default App;
