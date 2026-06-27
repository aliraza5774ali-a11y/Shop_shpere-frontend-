import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slice/authSlice";

// ─── Icons (inline SVG, no dep) ──────────────────────────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const ICONS = {
  dashboard:  "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  ecommerce:  "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0",
  orders:     "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2 M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2",
  products:   "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  categories: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
  earning:    "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  promotion:  "M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z M7 7h.01",
  customer:   "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  users:      "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  analytics:  "M18 20V10 M12 20V4 M6 20v-6",
  inventory:  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  wishlist:   "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  profile:    "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  address:    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  support:    "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  logout:     "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
  menu:       "M3 12h18 M3 6h18 M3 18h18",
  close:      "M18 6 6 18 M6 6l12 12",
};

// ─── Nav config ──────────────────────────────────────────────────────────────
const ADMIN_NAV = [
  { id: "overview",   label: "Dashboard",          icon: "dashboard"  },
  { id: "ecommerce",  label: "Ecommerce",          icon: "ecommerce"  },
  { id: "orders",     label: "All Order",          icon: "orders"     },
  { id: "products",   label: "All Product",        icon: "products"   },
  { id: "categories", label: "Categories",         icon: "categories" },
  { id: "earning",    label: "Earning",            icon: "earning"    },
  { id: "promotion",  label: "Promotion",          icon: "promotion"  },
  { id: "customer",   label: "Customer",           icon: "customer"   },
  { id: "inventory",  label: "Inventory",          icon: "inventory"  },
  { id: "analytics",  label: "Analytics",          icon: "analytics"  },
];

const CUSTOMER_NAV = [
  { id: "overview",   label: "Overview",           icon: "dashboard"  },
  { id: "orders",     label: "My Orders",          icon: "orders"     },
  { id: "wishlist",   label: "Wishlist",            icon: "wishlist"   },
  { id: "addresses",  label: "Addresses",           icon: "address"    },
  { id: "profile",    label: "Profile",             icon: "profile"    },
  { id: "support",    label: "Support",             icon: "support"    },
];

// ─── Sidebar ─────────────────────────────────────────────────────────────────
const Sidebar = ({ nav, active, onSelect, user, role, onLogout, open, onClose }) => (
  <>
    {/* Mobile overlay */}
    {open && (
      <div
        className="fixed inset-0 z-20 bg-black/30 lg:hidden"
        onClick={onClose}
      />
    )}

    <aside
      className={`
        fixed top-0 left-0 z-30 flex h-full w-60 flex-col bg-white border-r border-[#eeeeee]
        transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:translate-x-0 lg:z-auto
      `}
    >
      {/* Brand */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-[#eeeeee]">
        <span className="text-sm font-semibold tracking-tight text-gray-900">
          {role === "admin" ? "Admin Panel" : "My Account"}
        </span>
        <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-900">
          <Icon d={ICONS.close} size={16} />
        </button>
      </div>

      {/* User pill */}
      <div className="mx-4 mt-4 mb-3 flex items-center gap-2.5 rounded-xl bg-[#f8f8f8] px-3 py-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
          {user?.name?.[0]?.toUpperCase() ?? "U"}
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-gray-900">{user?.name}</p>
          <p className="truncate text-[10px] text-gray-400">{user?.email}</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-1">
        {nav.map(({ id, label, icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => { onSelect(id); onClose(); }}
              className={`
                mb-0.5 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium transition-all
                ${isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:bg-[#f8f8f8] hover:text-gray-900"}
              `}
            >
              <Icon d={ICONS[icon]} size={15} />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-[#eeeeee]">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-gray-400 hover:bg-[#f8f8f8] hover:text-gray-900 transition"
        >
          <Icon d={ICONS.logout} size={15} />
          Log out
        </button>
      </div>
    </aside>
  </>
);

// ─── Layout shell ─────────────────────────────────────────────────────────────
const DashboardLayout = ({ children, activeSection, onSectionChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, role } = useSelector((s) => s.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const nav = role === "admin" ? ADMIN_NAV : CUSTOMER_NAV;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-[#f8f8f8] font-sans overflow-hidden">
      <Sidebar
        nav={nav}
        active={activeSection}
        onSelect={onSectionChange}
        user={user}
        role={role}
        onLogout={handleLogout}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between border-b border-[#eeeeee] bg-white px-6 py-4">
          <button
            className="lg:hidden text-gray-400 hover:text-gray-900"
            onClick={() => setSidebarOpen(true)}
          >
            <Icon d={ICONS.menu} />
          </button>
          <h1 className="text-sm font-semibold text-gray-900 capitalize">
            {nav.find((n) => n.id === activeSection)?.label ?? "Dashboard"}
          </h1>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#eeeeee] px-2.5 py-1 text-[10px] font-medium text-gray-600 uppercase tracking-wide">
              {role}
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;