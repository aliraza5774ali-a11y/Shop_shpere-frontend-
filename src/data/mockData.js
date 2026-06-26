// ─── Mock Orders ─────────────────────────────────────────────────────────────
export const ORDERS = [
  { id: "ORD-001", customer: "Sarah Johnson", email: "sarah@example.com", date: "2025-06-20", items: 3, total: 249.99, status: "Delivered",  payment: "Paid"    },
  { id: "ORD-002", customer: "James Lee",     email: "james@example.com",  date: "2025-06-22", items: 1, total: 89.00,  status: "Shipped",   payment: "Paid"    },
  { id: "ORD-003", customer: "Aisha Khan",    email: "aisha@example.com",  date: "2025-06-23", items: 5, total: 415.50, status: "Processing",payment: "Paid"    },
  { id: "ORD-004", customer: "Tom Rivera",    email: "tom@example.com",    date: "2025-06-24", items: 2, total: 134.00, status: "Pending",   payment: "Pending" },
  { id: "ORD-005", customer: "Nina Patel",    email: "nina@example.com",   date: "2025-06-25", items: 4, total: 320.75, status: "Delivered",  payment: "Paid"    },
  { id: "ORD-006", customer: "Carlos Diaz",   email: "carlos@example.com", date: "2025-06-26", items: 2, total: 198.00, status: "Cancelled", payment: "Refunded"},
];

// My orders (customer view — subset)
export const MY_ORDERS = [
  { id: "ORD-003", date: "2025-06-23", items: ["Air Jordan 1 Retro", "Jordan 11 Cool Grey", "Jordan 4 Military Black", "Air Force 1", "Jordan 3 White Cement"], total: 415.50, status: "Processing", payment: "Paid"    },
  { id: "ORD-005", date: "2025-06-10", items: ["Jordan 6 Carmine", "Jordan 12 Taxi", "Air Jordan 1 Chicago", "Jordan 5 Grape"],                                  total: 320.75, status: "Delivered",  payment: "Paid"    },
  { id: "ORD-006", date: "2025-05-28", items: ["Jordan 4 Bred", "Jordan 11 Concord"],                                                                            total: 198.00, status: "Cancelled", payment: "Refunded"},
];

// ─── Mock Products ────────────────────────────────────────────────────────────
export const PRODUCTS = [
  { id: "PRD-001", name: "Air Jordan 1 Retro High OG",  sku: "AJ1-001", category: "Basketball", price: 180,  stock: 42, status: "Active"   },
  { id: "PRD-002", name: "Jordan 11 Retro Cool Grey",   sku: "J11-002", category: "Basketball", price: 225,  stock: 18, status: "Active"   },
  { id: "PRD-003", name: "Air Force 1 '07",             sku: "AF1-003", category: "Lifestyle",  price: 110,  stock: 65, status: "Active"   },
  { id: "PRD-004", name: "Jordan 4 Military Black",     sku: "J4-004",  category: "Basketball", price: 210,  stock: 0,  status: "Out"      },
  { id: "PRD-005", name: "Jordan 3 White Cement",       sku: "J3-005",  category: "Basketball", price: 200,  stock: 7,  status: "Low"      },
  { id: "PRD-006", name: "Air Jordan 6 Carmine",        sku: "AJ6-006", category: "Basketball", price: 195,  stock: 23, status: "Active"   },
  { id: "PRD-007", name: "Jordan 5 Grape",              sku: "J5-007",  category: "Basketball", price: 190,  stock: 0,  status: "Inactive" },
  { id: "PRD-008", name: "Air Jordan 12 Taxi",          sku: "J12-008", category: "Basketball", price: 215,  stock: 11, status: "Active"   },
];

// ─── Mock Users ───────────────────────────────────────────────────────────────
export const USERS = [
  { id: "USR-001", name: "Sarah Johnson", email: "sarah@example.com", joined: "2025-01-12", orders: 5, spent: 849.95, status: "Active"   },
  { id: "USR-002", name: "James Lee",     email: "james@example.com", joined: "2025-02-08", orders: 2, spent: 299.00, status: "Active"   },
  { id: "USR-003", name: "Aisha Khan",    email: "aisha@example.com", joined: "2025-03-15", orders: 8, spent: 1420.5, status: "Active"   },
  { id: "USR-004", name: "Tom Rivera",    email: "tom@example.com",   joined: "2025-04-01", orders: 1, spent: 134.00, status: "Inactive" },
  { id: "USR-005", name: "Nina Patel",    email: "nina@example.com",  joined: "2025-04-19", orders: 6, spent: 980.75, status: "Active"   },
  { id: "USR-006", name: "Carlos Diaz",   email: "carlos@example.com",joined: "2025-05-03", orders: 3, spent: 512.00, status: "Banned"   },
];

// ─── Wishlist ─────────────────────────────────────────────────────────────────
export const WISHLIST = [
  { id: "PRD-001", name: "Air Jordan 1 Retro High OG", price: 180, stock: "In Stock",    img: "" },
  { id: "PRD-006", name: "Air Jordan 6 Carmine",        price: 195, stock: "In Stock",    img: "" },
  { id: "PRD-004", name: "Jordan 4 Military Black",     price: 210, stock: "Out of Stock", img: "" },
];

// ─── Analytics sparkline data ─────────────────────────────────────────────────
export const WEEKLY_REVENUE = [1200, 1850, 1400, 2200, 1900, 2600, 3100];
export const MONTHLY_ORDERS = [22, 35, 28, 41, 38, 52, 47, 60, 55, 70, 64, 82];