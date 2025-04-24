// * 1
// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     status: "all",
//   },
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setStatusFilter } = filtersSlice.actions;

// export default filtersSlice.reducer;

// * 2
// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     status: "all",
//   },
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export default filtersSlice.reducer;

// export const { setStatusFilter } = filtersSlice.actions;

// export const selectStatusFilter = (state) => state.filters.status;

// * 3
// import { createSlice } from "@reduxjs/toolkit";

// const filtersInitialState = {
//   status: "all",
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export default filtersSlice.reducer;

// export const { setStatusFilter } = filtersSlice.actions;

// // Selectors

// export const selectStatusFilter = (state) => state.filters.status;

// * 4
import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

// Selectors

export const selectStatusFilter = (state) => state.filters.status;
