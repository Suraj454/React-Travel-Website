import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (

    <>
      <BrowserRouter>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>

       </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
