// * 1
// import { configureStore } from "@reduxjs/toolkit";
// import tasksReducer from "./tasksSlice";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//   },
// });

// * 2
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
