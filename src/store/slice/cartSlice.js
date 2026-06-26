import { createSlice } from "@reduxjs/toolkit";

// ─── Cart Slice ──────────────────────────────────────────────────────────────
// Drop this into your existing store:
//
//   import cartReducer from "./features/cart/cartSlice";
//   export const store = configureStore({
//     reducer: {
//       ...yourOtherReducers,
//       cart: cartReducer,
//     },
//   });

const makeLineId = (slug, size) => `${slug}__${size ?? "default"}`;

const initialState = {
  items: [], // [{ lineId, slug, title, price, image, size, quantity }]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        const { slug, title, price, image, size, quantity } = action.payload;
        const lineId = makeLineId(slug, size);
        const existing = state.items.find((item) => item.lineId === lineId);

        if (existing) {
          existing.quantity += quantity;
        } else {
          state.items.push({
            lineId,
            slug,
            title,
            price,
            image,
            size: size ?? null,
            quantity,
          });
        }
      },
      // Lets you call addToCart(product, { size, quantity }) instead of
      // having to flatten the product object yourself at the call site.
      prepare(product, { size, quantity = 1 } = {}) {
        return {
          payload: {
            slug: product.slug,
            title: product.title,
            price: product.price,
            image: product.img1,
            size: size ?? null,
            quantity,
          },
        };
      },
    },
    removeFromCart(state, action) {
      const lineId = action.payload;
      state.items = state.items.filter((item) => item.lineId !== lineId);
    },
    updateQuantity(state, action) {
      const { lineId, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.lineId !== lineId);
      } else {
        const item = state.items.find((item) => item.lineId === lineId);
        if (item) item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// ─── Selectors ───────────────────────────────────────────────────────────────
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalItems = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

const parsePrice = (price) =>
  typeof price === "number" ? price : parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

export const selectCartSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

export default cartSlice.reducer;