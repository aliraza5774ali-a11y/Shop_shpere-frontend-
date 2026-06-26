import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Collection from "./pages/Collection";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/collections" element={<Collection />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
