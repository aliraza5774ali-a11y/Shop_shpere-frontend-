import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  ORDERS, PRODUCTS, USERS, WEEKLY_REVENUE, MONTHLY_ORDERS,
} from "../data/mockData.js";

// ─── Tiny helpers ─────────────────────────────────────────────────────────────
const Badge = ({ status }) => {
  const map = {
    Delivered:  "bg-[#f0faf4] text-[#1a7a44]",
    Shipped:    "bg-[#eff6ff] text-[#1d4ed8]",
    Processing: "bg-[#fefce8] text-[#854d0e]",
    Pending:    "bg-[#fefce8] text-[#854d0e]",
    Cancelled:  "bg-[#fef2f2] text-[#991b1b]",
    Active:     "bg-[#f0faf4] text-[#1a7a44]",
    Inactive:   "bg-[#eeeeee] text-gray-500",
    Banned:     "bg-[#fef2f2] text-[#991b1b]",
    Low:        "bg-[#fefce8] text-[#854d0e]",
    Out:        "bg-[#fef2f2] text-[#991b1b]",
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

const StatCard = ({ label, value, sub, accent }) => (
  <Card>
    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
    <p className={`mt-1.5 text-2xl font-semibold ${accent ?? "text-gray-900"}`}>{value}</p>
    {sub && <p className="mt-0.5 text-xs text-gray-400">{sub}</p>}
  </Card>
);

// Mini sparkline SVG
const Spark = ({ data, color = "#111" }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 120; const h = 36;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
};

// ─── Overview ─────────────────────────────────────────────────────────────────
const AdminOverview = () => {
  const totalRevenue = ORDERS.filter(o => o.payment === "Paid").reduce((s, o) => s + o.total, 0);
  const delivered    = ORDERS.filter(o => o.status === "Delivered").length;
  const pendingCount = ORDERS.filter(o => o.status === "Pending" || o.status === "Processing").length;
  const activeUsers  = USERS.filter(u => u.status === "Active").length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Revenue"   value={`$${totalRevenue.toLocaleString("en", { minimumFractionDigits: 2 })}`} sub="This period" />
        <StatCard label="Orders Delivered" value={delivered}   sub={`of ${ORDERS.length} orders`} />
        <StatCard label="Pending / Processing" value={pendingCount} accent="text-amber-600" />
        <StatCard label="Active Users"    value={activeUsers}  sub={`of ${USERS.length} total`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-900">Weekly Revenue</p>
            <Spark data={WEEKLY_REVENUE} />
          </div>
          <div className="flex items-end gap-1 h-20">
            {WEEKLY_REVENUE.map((v, i) => {
              const max = Math.max(...WEEKLY_REVENUE);
              const pct = (v / max) * 100;
              const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
              return (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gray-900 transition-all"
                    style={{ height: `${pct}%` }}
                  />
                  <span className="text-[9px] text-gray-400">{days[i]}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <p className="mb-4 text-xs font-semibold text-gray-900">Recent Orders</p>
          <div className="space-y-3">
            {ORDERS.slice(0, 4).map((o) => (
              <div key={o.id} className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-900">{o.customer}</p>
                  <p className="text-[10px] text-gray-400">{o.id} · {o.date}</p>
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
    </div>
  );
};

// ─── Orders & Invoices ────────────────────────────────────────────────────────
const AdminOrders = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const statuses = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];
  const filtered = ORDERS.filter(o =>
    (filter === "All" || o.status === filter) &&
    (o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.includes(search))
  );

  if (selected) {
    const o = selected;
    return (
      <div className="space-y-4">
        <button onClick={() => setSelected(null)} className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">
          ← Back to Orders
        </button>

        {/* Invoice card */}
        <Card>
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">Invoice</p>
              <p className="mt-0.5 text-xl font-semibold text-gray-900">{o.id}</p>
              <p className="text-xs text-gray-400 mt-0.5">Issued {o.date}</p>
            </div>
            <Badge status={o.payment} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mb-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Bill To</p>
              <p className="text-sm font-medium text-gray-900">{o.customer}</p>
              <p className="text-xs text-gray-400">{o.email}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Order Status</p>
              <Badge status={o.status} />
            </div>
          </div>

          <div className="rounded-xl border border-[#eeeeee] overflow-hidden mb-6">
            <table className="w-full text-xs">
              <thead className="bg-[#f8f8f8] border-b border-[#eeeeee]">
                <tr>
                  <th className="px-4 py-2.5 text-left font-medium text-gray-500">Item</th>
                  <th className="px-4 py-2.5 text-right font-medium text-gray-500">Qty</th>
                  <th className="px-4 py-2.5 text-right font-medium text-gray-500">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeee]">
                {Array.from({ length: o.items }).map((_, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-gray-700">Item #{i + 1}</td>
                    <td className="px-4 py-3 text-right text-gray-500">1</td>
                    <td className="px-4 py-3 text-right text-gray-900 font-medium">
                      ${(o.total / o.items).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-[#eeeeee] bg-[#f8f8f8]">
                <tr>
                  <td colSpan="2" className="px-4 py-3 text-xs font-semibold text-gray-900">Total</td>
                  <td className="px-4 py-3 text-right text-sm font-bold text-gray-900">${o.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex gap-2">
            <button className="rounded-xl bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800 transition">
              Download PDF
            </button>
            <button className="rounded-xl border border-[#eeeeee] px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#f8f8f8] transition">
              Send to Customer
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search order or customer…"
          className="rounded-xl border border-[#eeeeee] bg-white px-3.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 w-52"
        />
        <div className="flex flex-wrap gap-1.5">
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-3 py-1.5 text-[10px] font-medium transition ${filter === s ? "bg-gray-900 text-white" : "bg-white border border-[#eeeeee] text-gray-500 hover:border-gray-900"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-[#f8f8f8] border-b border-[#eeeeee]">
            <tr>
              {["Order ID","Customer","Date","Items","Total","Payment","Status",""].map(h => (
                <th key={h} className="px-4 py-3 text-left font-medium text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eeeeee]">
            {filtered.map(o => (
              <tr key={o.id} className="hover:bg-[#f8f8f8] transition">
                <td className="px-4 py-3 font-mono font-medium text-gray-900">{o.id}</td>
                <td className="px-4 py-3 text-gray-700">{o.customer}</td>
                <td className="px-4 py-3 text-gray-400">{o.date}</td>
                <td className="px-4 py-3 text-gray-700">{o.items}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">${o.total}</td>
                <td className="px-4 py-3"><Badge status={o.payment} /></td>
                <td className="px-4 py-3"><Badge status={o.status} /></td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setSelected(o)}
                    className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] font-medium text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
                  >
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-10 text-center text-xs text-gray-400">No orders match your filter.</p>
        )}
      </Card>
    </div>
  );
};

// ─── Products ─────────────────────────────────────────────────────────────────
const AdminProducts = () => {
  const [search, setSearch] = useState("");
  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.includes(search)
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product or SKU…"
          className="rounded-xl border border-[#eeeeee] bg-white px-3.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 w-52"
        />
        <button className="rounded-xl bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-800 transition">
          + Add Product
        </button>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-[#f8f8f8] border-b border-[#eeeeee]">
            <tr>
              {["SKU","Product","Category","Price","Stock","Status","Actions"].map(h => (
                <th key={h} className="px-4 py-3 text-left font-medium text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eeeeee]">
            {filtered.map(p => (
              <tr key={p.id} className="hover:bg-[#f8f8f8] transition">
                <td className="px-4 py-3 font-mono text-gray-400">{p.sku}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                <td className="px-4 py-3 text-gray-500">{p.category}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">${p.price}</td>
                <td className={`px-4 py-3 font-medium ${p.stock === 0 ? "text-red-500" : p.stock < 10 ? "text-amber-500" : "text-gray-700"}`}>
                  {p.stock === 0 ? "Out" : p.stock}
                </td>
                <td className="px-4 py-3"><Badge status={p.status} /></td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] text-gray-600 hover:border-gray-900 hover:text-gray-900 transition">Edit</button>
                    <button className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] text-red-400 hover:border-red-400 transition">Del</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

// ─── Inventory ────────────────────────────────────────────────────────────────
const AdminInventory = () => {
  const low     = PRODUCTS.filter(p => p.stock > 0 && p.stock < 10);
  const out     = PRODUCTS.filter(p => p.stock === 0);
  const healthy = PRODUCTS.filter(p => p.stock >= 10);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Healthy Stock" value={healthy.length} />
        <StatCard label="Low Stock"     value={low.length}     accent="text-amber-600" />
        <StatCard label="Out of Stock"  value={out.length}     accent="text-red-500"   />
      </div>

      <Card>
        <p className="mb-4 text-xs font-semibold text-gray-900">Stock Levels</p>
        <div className="space-y-3">
          {PRODUCTS.map(p => {
            const pct = Math.min((p.stock / 70) * 100, 100);
            const color = p.stock === 0 ? "bg-red-400" : p.stock < 10 ? "bg-amber-400" : "bg-gray-900";
            return (
              <div key={p.id}>
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-xs text-gray-700 truncate max-w-[60%]">{p.name}</p>
                  <span className={`text-xs font-semibold ${p.stock === 0 ? "text-red-500" : p.stock < 10 ? "text-amber-600" : "text-gray-900"}`}>
                    {p.stock} units
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-[#eeeeee] overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {out.length > 0 && (
        <Card>
          <p className="mb-3 text-xs font-semibold text-red-500">Restock Needed</p>
          <div className="space-y-2">
            {out.map(p => (
              <div key={p.id} className="flex items-center justify-between">
                <p className="text-xs text-gray-700">{p.name}</p>
                <button className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] font-medium text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition">
                  Restock
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

// ─── Users ────────────────────────────────────────────────────────────────────
const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const filtered = USERS.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) || u.email.includes(search)
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user…"
          className="rounded-xl border border-[#eeeeee] bg-white px-3.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 w-52"
        />
        <p className="text-xs text-gray-400">{USERS.length} total users</p>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-[#f8f8f8] border-b border-[#eeeeee]">
            <tr>
              {["User","Email","Joined","Orders","Total Spent","Status",""].map(h => (
                <th key={h} className="px-4 py-3 text-left font-medium text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eeeeee]">
            {filtered.map(u => (
              <tr key={u.id} className="hover:bg-[#f8f8f8] transition">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
                      {u.name[0]}
                    </div>
                    <span className="font-medium text-gray-900">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-400">{u.email}</td>
                <td className="px-4 py-3 text-gray-400">{u.joined}</td>
                <td className="px-4 py-3 text-gray-700">{u.orders}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">${u.spent.toLocaleString()}</td>
                <td className="px-4 py-3"><Badge status={u.status} /></td>
                <td className="px-4 py-3">
                  <button className="rounded-lg border border-[#eeeeee] px-2.5 py-1 text-[10px] text-gray-600 hover:border-gray-900 hover:text-gray-900 transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

// ─── Analytics ────────────────────────────────────────────────────────────────
const AdminAnalytics = () => {
  const totalRevenue  = ORDERS.filter(o => o.payment === "Paid").reduce((s, o) => s + o.total, 0);
  const avgOrderValue = (totalRevenue / ORDERS.filter(o => o.payment === "Paid").length).toFixed(2);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Revenue"       value={`$${totalRevenue.toFixed(2)}`} />
        <StatCard label="Avg Order"     value={`$${avgOrderValue}`}           />
        <StatCard label="Total Orders"  value={ORDERS.length}                 />
        <StatCard label="Total Users"   value={USERS.length}                  />
      </div>

      <Card>
        <p className="mb-4 text-xs font-semibold text-gray-900">Monthly Orders (12 months)</p>
        <div className="flex items-end gap-1.5 h-28">
          {MONTHLY_ORDERS.map((v, i) => {
            const max = Math.max(...MONTHLY_ORDERS);
            const pct = (v / max) * 100;
            return (
              <div key={i} className="group flex flex-1 flex-col items-center gap-1">
                <span className="hidden group-hover:block text-[9px] text-gray-500">{v}</span>
                <div
                  className="w-full rounded-t-md bg-gray-900 hover:bg-gray-700 transition-all cursor-default"
                  style={{ height: `${pct}%` }}
                />
                <span className="text-[9px] text-gray-400">{months[i]}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <p className="mb-3 text-xs font-semibold text-gray-900">Orders by Status</p>
          {["Delivered","Shipped","Processing","Pending","Cancelled"].map(s => {
            const count = ORDERS.filter(o => o.status === s).length;
            const pct   = Math.round((count / ORDERS.length) * 100);
            return (
              <div key={s} className="mb-2.5">
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className="text-gray-600">{s}</span>
                  <span className="font-medium text-gray-900">{count} ({pct}%)</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#eeeeee]">
                  <div className="h-full rounded-full bg-gray-900" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </Card>

        <Card>
          <p className="mb-3 text-xs font-semibold text-gray-900">Top Customers</p>
          <div className="space-y-3">
            {[...USERS].sort((a, b) => b.spent - a.spent).slice(0, 5).map((u, i) => (
              <div key={u.id} className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-gray-300 w-3">{i + 1}</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eeeeee] text-[10px] font-bold text-gray-700">
                  {u.name[0]}
                </div>
                <p className="flex-1 text-xs text-gray-700">{u.name}</p>
                <p className="text-xs font-semibold text-gray-900">${u.spent.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ─── Admin Dashboard (router) ─────────────────────────────────────────────────
const AdminDashboard = () => {
  const [section, setSection] = useState("overview");

  const SECTIONS = {
    overview:  <AdminOverview />,
    orders:    <AdminOrders />,
    products:  <AdminProducts />,
    inventory: <AdminInventory />,
    users:     <AdminUsers />,
    analytics: <AdminAnalytics />,
  };

  return (
    <DashboardLayout activeSection={section} onSectionChange={setSection}>
      {SECTIONS[section]}
    </DashboardLayout>
  );
};

export default AdminDashboard;