// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Hello from "./views/Warriors";
import Home from "./views/Home";
import Warriors from "./views/Warriors";

const App = () => (
  <div>
    <h1>Basic Example</h1>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/warriors" element={<Warriors />} />

    </Routes>
  </div>
);

export default App;
