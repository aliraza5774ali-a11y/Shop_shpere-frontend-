// Navbar.jsx
import { Handbag, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openLogin,
  closeAuth,
  openCart,
  closeCart,
  openSearch,
  closeSearch,
} from "../../store/slice/Uislice";
import AuthModal from "../auth/AuthModal";
import CartSidebar from "../cart/CartSidebar";
import SearchModal from "../searchModal";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SHOP", path: "/shops" },
  { name: "COLLECTION", path: "/collections" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.ui.authModal);
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);
  const isSearchOpen = useSelector((state) => state.ui.isSearchOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-7 py-6 transition-all duration-200 ${
        isScrolled ? "bg-[#f8f8f8] text-black" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className={`cursor-pointer text-[24px] font-semibold transition-all duration-200 ${
            isScrolled
              ? "text-black hover:text-black/60"
              : "text-white hover:text-white/70"
          }`}
        >
          WEARIX
        </Link>

        <div className="flex items-center">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-[14px] font-medium uppercase tracking-[0.06em] no-underline transition-colors duration-200 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:bg-[#c9a96e] after:transition-transform after:duration-200 after:content-[''] ${
                  isActive
                    ? `after:scale-x-100 ${isScrolled ? "text-black" : "text-white"}`
                    : `after:scale-x-0 ${isScrolled ? "text-black/70 hover:text-black" : "text-white/80 hover:text-white"} hover:after:scale-x-100`
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => dispatch(openSearch())}
            className={`cursor-pointer rounded-full p-2 backdrop-blur-lg ${
              isScrolled ? "bg-black/10 text-black" : "bg-black/20 text-white"
            }`}
          >
            <Search size={16} />
          </button>

          <button
            onClick={() => dispatch(openCart())}
            className={`cursor-pointer rounded-full p-2 ${
              isScrolled ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <Handbag size={16} />
          </button>

          <button
            onClick={() => dispatch(openLogin())}
            className={`cursor-pointer rounded-full p-2 ${
              isScrolled ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <User size={16} />
          </button>
        </div>
      </div>

      <AuthModal view={authModal} onClose={() => dispatch(closeAuth())} />
      <CartSidebar isOpen={isCartOpen} onClose={() => dispatch(closeCart())} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => dispatch(closeSearch())}
      />
    </nav>
  );
};

export default Navbar;
