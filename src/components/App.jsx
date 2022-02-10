import React, { Suspense } from "react";

import "../styles/style.css";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const Blogs = React.lazy(() => import("./Blogs"));
const Contacts = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
