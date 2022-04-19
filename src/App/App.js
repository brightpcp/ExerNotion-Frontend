import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Form from "../page/Form";

import Activity from "../components/Activity/Activity";
import Update from "../components/UpdateActivity/Update";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Form />} exact />
          <Route path="/activities" element={<Activity />} />

          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
