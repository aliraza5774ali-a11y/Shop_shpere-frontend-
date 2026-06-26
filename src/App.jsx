import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Collection from "./pages/Collection";
import MainLayout from "./components/layout/MainLayout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SluggedProductDetails from "./components/SluggedProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public routes with shared layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shop/:slug" element={<SluggedProductDetails/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        {/* Protected — no MainLayout (dashboard has its own sidebar layout) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;