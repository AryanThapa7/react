import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "All",
  sortBy: "sales",

  products: [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      sales: 125000,
      orders: 50,
      customers: 45,
    },
    {
      id: 2,
      name: "Headphones",
      category: "Electronics",
      sales: 75000,
      orders: 85,
      customers: 72,
    },
    {
      id: 3,
      name: "Office Chair",
      category: "Furniture",
      sales: 95000,
      orders: 40,
      customers: 38,
    },
    {
      id: 4,
      name: "Desk",
      category: "Furniture",
      sales: 65000,
      orders: 32,
      customers: 30,
    },
    {
      id: 5,
      name: "Running Shoes",
      category: "Sports",
      sales: 55000,
      orders: 70,
      customers: 65,
    },
    {
      id: 6,
      name: "Football",
      category: "Sports",
      sales: 30000,
      orders: 90,
      customers: 82,
    },
    {
      id: 7,
      name: "Backpack",
      category: "Accessories",
      sales: 42000,
      orders: 60,
      customers: 55,
    },
    {
      id: 8,
      name: "Watch",
      category: "Accessories",
      sales: 88000,
      orders: 48,
      customers: 44,
    },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",

  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    resetFilters: (state) => {
      state.selectedCategory = "All";
      state.sortBy = "sales";
    },
  },
});

export const {
  setCategory,
  setSortBy,
  resetFilters,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;