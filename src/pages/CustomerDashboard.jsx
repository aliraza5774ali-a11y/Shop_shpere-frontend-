import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";
import { MY_ORDERS, WISHLIST } from "../data/mockData.js";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const Badge = ({ status }) => {
  const map = {
    Delivered:  "bg-[#f0faf4] text-[#1a7a44]",
    Shipped:    "bg-[#eff6ff] text-[#1d4ed8]",
    Processing: "bg-[#fefce8] text-[#854d0e]",
    Pending:    "bg-[#fefce8] text-[#854d0e]",
    Cancelled:  "bg-[#fef2f2] text-[#991b1b]",
    Paid:       "bg-[#f0faf4] text-[#1a7a44]",
    Refunded:   "bg-[#fef2f2] text-[#991b1b]",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${map[status] ?? "bg-[#eeeeee] text-gray-600"}`}>
      {status}
    </span>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-[#eeeeee] bg-white p-5 ${className}`}>
    {children}
  </div>
);

// ─── Overview ─────────────────────────────────────────────────────────────────
const CustomerOverview = ({ onNav }) => {
  const { user } = useSelector((s) => s.auth);
  const totalSpent   = MY_ORDERS.filter(o => o.payment === "Paid").reduce((s, o) => s + o.total, 0);
  const activeOrders = MY_ORDERS.filter(o => o.status === "Processing" || o.status === "Shipped").length;

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="rounded-2xl border border-[#eeeeee] bg-white px-6 py-5">
        <p className="text-xs text-gray-400">Welcome back</p>
        <p className="mt-0.5 text-xl font-semibold text-gray-900">{user?.name} 👋</p>
        <p className="mt-1 text-xs text-gray-400">{user?.email}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Total Orders</p>
          <p className="mt-1.5 text-2xl font-semibold text-gray-900">{MY_ORDERS.length}</p>
        </Card>
        <Card>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Active</p>
          <p className="mt-1.5 text-2xl font-semibold text-amber-600">{activeOrders}</p>
        </Card>
        <Card>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Total Spent</p>
          <p className="mt-1.5 text-2xl font-semibold text-gray-900">${totalSpent.toFixed(2)}</p>
        </Card>
      </div>

      {/* Recent orders */}
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-900">Recent Orders</p>
          <button onClick={() => onNav("orders")} className="text-[10px] font-medium text-gray-400 hover:text-gray-900 transition">
            View all →
          </button>
        </div>
        <div className="space-y-3">
          {MY_ORDERS.map(o => (
            <div key={o.id} className="flex items-center justify-between rounded-xl border border-[#eeeeee] px-4 py-3">
              <div>
                <p className="text-xs font-medium text-gray-900">{o.id}</p>
                <p className="text-[10px] text-gray-400">{o.date} · {o.items.length} item{o.items.length > 1 ? "s" : ""}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-gray-900">${o.total}</p>
                <Badge status={o.status} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

// ─── My Orders & Invoices ─────────────────────────────────────────────────────
const CustomerOrders = () => {
  const [selected, setSelected] = useState(null);

  if (selected) {
    const o = selected;
    return (
      <div className="space-y-4">
        <button onClick={() => setSelected(null)} className="text-xs font-medium text-gray-500 hover:text-gray-900">
          ← Back to Orders
        </button>

        <Card>
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">Invoice</p>
              <p className="mt-0.5 text-xl font-semibold text-gray-900">{o.id}</p>
              <p className="text-xs text-gray-400 mt-0.5">Ordered {o.date}</p>
            </div>
            <Badge status={o.payment} />
          </div>

          <div className="rounded-xl border border-[#eeeeee] overflow-hidden mb-6">
            <table className="w-full text-xs">
              <thead className="bg-[#f8f8f8] border-b border-[#eeeeee]">
                <tr>
                  <th className="px-4 py-2.5 text-left font-medium text-gray-500">Product</th>
                  <th className="px-4 py-2.5 text-right font-medium text-gray-500">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeee]">
                {o.items.map((item, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-gray-700">{item}</td>
                    <td className="px-4 py-3 text-right font-medium text-gray-900">
                      ${(o.total / o.items.length).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-[#eeeeee] bg-[#f8f8f8]">
                <tr>
                  <td className="px-4 py-3 text-xs font-semibold text-gray-900">Total</td>
                  <td className="px-4 py-3 text-right text-sm font-bold text-gray-900">${o.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gray-500">Status:</span>
            <Badge status={o.status} />
          </div>

          <button className="rounded-xl bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800 transition">
            Download Invoice
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-gray-900">{MY_ORDERS.length} Orders</p>
      {MY_ORDERS.map(o => (
        <Card key={o.id} className="cursor-pointer hover:border-gray-300 transition" >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-gray-900">{o.id}</p>
              <p className="text-[10px] text-gray-400">{o.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">${o.total}</p>
              <Badge status={o.status} />
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {o.items.slice(0, 3).map((item, i) => (
              <span key={i} className="rounded-full bg-[#f8f8f8] border border-[#eeeeee] px-2 py-0.5 text-[10px] text-gray-500">
                {item}
              </span>
            ))}
            {o.items.length > 3 && (
              <span className="rounded-full bg-[#f8f8f8] border border-[#eeeeee] px-2 py-0.5 text-[10px] text-gray-400">
                +{o.items.length - 3} more
              </span>
            )}
          </div>
          <button
            onClick={() => setSelected(o)}
            className="text-[10px] font-medium text-gray-500 hover:text-gray-900 transition underline"
          >
            View Invoice
          </button>
        </Card>
      ))}
    </div>
  );
};

// ─── Wishlist ─────────────────────────────────────────────────────────────────
const CustomerWishlist = () => (
  <div className="space-y-3">
    <p className="text-xs font-semibold text-gray-900">{WISHLIST.length} Saved Items</p>
    {WISHLIST.map(item => (
      <Card key={item.id} className="flex items-center gap-4">
        {/* Placeholder image */}
        <div className="h-14 w-14 rounded-xl bg-[#eeeeee] flex items-center justify-center text-gray-300 text-xs flex-shrink-0">
          IMG
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-900 truncate">{item.name}</p>
          <p className="text-sm font-bold text-gray-900 mt-0.5">${item.price}</p>
          <span className={`text-[10px] font-medium ${item.stock === "In Stock" ? "text-green-600" : "text-red-500"}`}>
            {item.stock}
          </span>
        </div>
        <div className="flex flex-col gap-1.5 flex-shrink-0">
          <button
            disabled={item.stock !== "In Stock"}
            className="rounded-xl bg-gray-900 px-3 py-1.5 text-[10px] font-medium text-white hover:bg-gray-800 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
          <button className="rounded-xl border border-[#eeeeee] px-3 py-1.5 text-[10px] font-medium text-red-400 hover:border-red-300 transition">
            Remove
          </button>
        </div>
      </Card>
    ))}
  </div>
);

// ─── Addresses ────────────────────────────────────────────────────────────────
const MOCK_ADDRESSES = [
  { id: 1, label: "Home",   line1: "42 Jordan Ave",      city: "New York",    state: "NY", zip: "10001", default: true  },
  { id: 2, label: "Office", line1: "Suite 800, 5th Ave", city: "New York",    state: "NY", zip: "10022", default: false },
];

const CustomerAddresses = () => {
  const [addresses, setAddresses] = useState(MOCK_ADDRESSES);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-900">Saved Addresses</p>
        <button className="rounded-xl bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800 transition">
          + Add Address
        </button>
      </div>

      {addresses.map(a => (
        <Card key={a.id} className={a.default ? "border-gray-900" : ""}>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-semibold text-gray-900">{a.label}</p>
                {a.default && (
                  <span className="rounded-full bg-gray-900 px-2 py-0.5 text-[9px] font-semibold text-white">
                    Default
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600">{a.line1}</p>
              <p className="text-xs text-gray-400">{a.city}, {a.state} {a.zip}</p>
            </div>
            <div className="flex gap-1">
              <button className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] text-gray-600 hover:border-gray-900 transition">
                Edit
              </button>
              {!a.default && (
                <button
                  onClick={() => setAddresses(addresses.map(x => ({ ...x, default: x.id === a.id })))}
                  className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] text-gray-600 hover:border-gray-900 transition"
                >
                  Set Default
                </button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

// ─── Profile ──────────────────────────────────────────────────────────────────
const CustomerProfile = () => {
  const { user } = useSelector((s) => s.auth);
  const [name,  setName]  = useState(user?.name  ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4 max-w-lg">
      <Card>
        <p className="mb-4 text-xs font-semibold text-gray-900">Personal Information</p>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#eeeeee] bg-[#f8f8f8] px-3.5 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#eeeeee] bg-[#f8f8f8] px-3.5 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className={`mt-4 rounded-xl px-5 py-2.5 text-xs font-medium text-white transition ${saved ? "bg-green-600" : "bg-gray-900 hover:bg-gray-800"}`}
        >
          {saved ? "Saved ✓" : "Save Changes"}
        </button>
      </Card>

      <Card>
        <p className="mb-4 text-xs font-semibold text-gray-900">Change Password</p>
        <div className="space-y-3">
          {["Current Password","New Password","Confirm New Password"].map(lbl => (
            <div key={lbl}>
              <label className="mb-1 block text-xs font-medium text-gray-600">{lbl}</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#eeeeee] bg-[#f8f8f8] px-3.5 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition"
              />
            </div>
          ))}
        </div>
        <button className="mt-4 rounded-xl bg-gray-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-gray-800 transition">
          Update Password
        </button>
      </Card>
    </div>
  );
};

// ─── Support ──────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "How do I track my order?",       a: "Go to My Orders, click on the order, and check the status. Shipped orders include a tracking number."  },
  { q: "What is your return policy?",    a: "Items can be returned within 30 days of delivery in original condition. Start a return from My Orders."  },
  { q: "How long does shipping take?",   a: "Standard: 5-7 business days. Express: 2-3 business days. Next Day available at checkout."               },
  { q: "Can I change or cancel an order?", a: "Orders can be modified within 1 hour of placement. After that, contact support."                      },
];

const CustomerSupport = () => {
  const [open, setOpen] = useState(null);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-4 max-w-lg">
      <Card>
        <p className="mb-4 text-xs font-semibold text-gray-900">Frequently Asked Questions</p>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-[#eeeeee] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
              >
                <span className="text-xs font-medium text-gray-900">{faq.q}</span>
                <span className="text-gray-400 text-xs ml-2">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="border-t border-[#eeeeee] bg-[#f8f8f8] px-4 py-3">
                  <p className="text-xs text-gray-500">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <p className="mb-4 text-xs font-semibold text-gray-900">Contact Support</p>
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Subject</label>
            <select className="w-full rounded-xl border border-[#eeeeee] bg-[#f8f8f8] px-3.5 py-2.5 text-xs text-gray-900 outline-none focus:border-gray-900 transition">
              <option>Order issue</option>
              <option>Return / Refund</option>
              <option>Product question</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Message</label>
            <textarea
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Describe your issue…"
              className="w-full rounded-xl border border-[#eeeeee] bg-[#f8f8f8] px-3.5 py-2.5 text-xs text-gray-900 outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 resize-none transition"
            />
          </div>
        </div>
        <button
          onClick={() => { setSent(true); setMsg(""); setTimeout(() => setSent(false), 3000); }}
          className={`mt-3 rounded-xl px-5 py-2.5 text-xs font-medium text-white transition ${sent ? "bg-green-600" : "bg-gray-900 hover:bg-gray-800"}`}
        >
          {sent ? "Sent ✓" : "Send Message"}
        </button>
      </Card>
    </div>
  );
};

// ─── Customer Dashboard (router) ──────────────────────────────────────────────
const CustomerDashboard = () => {
  const [section, setSection] = useState("overview");

  const SECTIONS = {
    overview:  <CustomerOverview onNav={setSection} />,
    orders:    <CustomerOrders />,
    wishlist:  <CustomerWishlist />,
    addresses: <CustomerAddresses />,
    profile:   <CustomerProfile />,
    support:   <CustomerSupport />,
  };

  return (
    <DashboardLayout activeSection={section} onSectionChange={setSection}>
      {SECTIONS[section]}
    </DashboardLayout>
  );
};

export default CustomerDashboard;