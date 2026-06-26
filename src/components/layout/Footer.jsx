import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-28 pt-16 pb-8 flex flex-col gap-16">
      {/* Top — Newsletter + Nav */}
      <div className="flex items-start justify-between gap-16">
        {/* Brand + Newsletter */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold tracking-wide">WEARIX</h2>
            <p className="text-sm text-white/50 leading-relaxed">
              Minimal luxury for those who dress with intention. Curated drops,
              timeless pieces.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs text-white/40 uppercase tracking-widest">
              Stay in the loop
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition"
              />
              <button className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Nav Columns */}
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Shop
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="hover:text-white transition cursor-pointer">
                New Arrivals
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Collections
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Bestsellers
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Sale
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Company
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Press
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Support
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="hover:text-white transition cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Shipping & Returns
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Size Guide
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom — Legal + Socials */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/30">
          © 2026 Wearix. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <BsInstagram
            size={16}
            className="text-white/40 hover:text-white transition cursor-pointer"
          />
          <BsTwitter
            size={16}
            className="text-white/40 hover:text-white transition cursor-pointer"
          />
          <BsFacebook
            size={16}
            className="text-white/40 hover:text-white transition cursor-pointer"
          />
          <BsYoutube
            size={16}
            className="text-white/40 hover:text-white transition cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-6 text-xs text-white/30">
          <span className="hover:text-white/60 transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white/60 transition cursor-pointer">
            Terms of Use
          </span>
          <span className="hover:text-white/60 transition cursor-pointer">
            Cookie Settings
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
