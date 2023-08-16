// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Warriors from "./views/Warriors";
import NavigationBar from "./components/Navbar";
import Historics from "./views/Historics";
import Weapons from "./views/Weapons";

const App = () => (
  <div>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/warriors" element={<Warriors />} />
      <Route path="/historics" element={<Historics />} />
      <Route path="/weapons" element={<Weapons />} />
    </Routes>
  </div>
);

export default App;
