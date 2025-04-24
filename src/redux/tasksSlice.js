// * 1
// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
// });

// * 2
// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     // Виконається в момент старту HTTP-запиту
//     fetchInProgress(state) {},
//     // Виконається якщо HTTP-запит завершився успішно
//     fetchSuccess() {},
//     // Виконається якщо HTTP-запит завершився з помилкою
//     fetchError() {},
//   },
// });

// * 3
// import { createSlice } from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     fetchError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchInProgress, fetchSuccess, fetchError } = tasksSlice.actions;

// export default tasksSlice.reducer;

// * 4
// import { createSlice } from "@reduxjs/toolkit";
// // Імпортуємо операцію
// import { fetchTasks } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   // Додаємо обробку зовнішніх екшенів
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state, action) => {})
//       .addCase(fetchTasks.fulfilled, (state, action) => {})
//       .addCase(fetchTasks.rejected, (state, action) => {});
//   },
// });

// export default tasksSlice.reducer;

// * 5
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default tasksSlice.reducer;
// * 6
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default tasksSlice.reducer;

// * 7
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask } from "./operations";

// const tasksSlice = createSlice({
//   extraReducers: (builder) => {
//     builder
//       .addCase(addTask.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//     // Код решти редюсерів
//   },
// });

// * 8
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask, deleteTask } from "./operations";

// const tasksSlice = createSlice({
//   extraReducers: (builder) => {
//     builder
//       .addCase(deleteTask.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (task) => task.id !== action.payload.id
//         );
//       })
//       .addCase(deleteTask.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//     // Код решти редюсерів
//   },
// });

// export default tasksSlice.reducer;

// * 9
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask, deleteTask } from "./operations";

// const tasksSlice = createSlice({
//   extraReducers: (builder) => {
//     builder
//       .addCase(deleteTask.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (task) => task.id !== action.payload.id
//         );
//       })
//       .addCase(deleteTask.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//     // Код решти редюсерів
//   },
// });

// export default tasksSlice.reducer;
// * 10
// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, handleRejected)
//       .addCase(addTask.pending, handlePending)
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (task) => task.id !== action.payload.id
//         );
//       })
//       .addCase(deleteTask.rejected, handleRejected)
//       .addCase(toggleCompleted.pending, handlePending)
//       .addCase(toggleCompleted.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.map((task) =>
//           task.id === action.payload.id ? action.payload : task
//         );
//       })
//       .addCase(toggleCompleted.rejected, handleRejected);
//   },
// });

// export default tasksSlice.reducer;

// * 11
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, handleRejected)
//       .addCase(addTask.pending, handlePending)
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (task) => task.id !== action.payload.id
//         );
//       })
//       .addCase(deleteTask.rejected, handleRejected)
//       .addCase(toggleCompleted.pending, handlePending)
//       .addCase(toggleCompleted.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.map((task) =>
//           task.id === action.payload.id ? action.payload : task
//         );
//       })
//       .addCase(toggleCompleted.rejected, handleRejected);
//   },
// });

// export default tasksSlice.reducer;
// * 12

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, handleRejected)
//       .addCase(addTask.pending, handlePending)
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (task) => task.id !== action.payload.id
//         );
//       })
//       .addCase(deleteTask.rejected, handleRejected)
//       .addCase(toggleCompleted.pending, handlePending)
//       .addCase(toggleCompleted.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.map((task) =>
//           task.id === action.payload.id ? action.payload : task
//         );
//       })
//       .addCase(toggleCompleted.rejected, handleRejected);
//   },
// });

// export default tasksSlice.reducer;

// export const selectTasks = (state) => state.tasks.items;

// export const selectIsLoading = (state) => state.tasks.isLoading;

// export const selectError = (state) => state.tasks.error;

// * 13
// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";
// import { selectStatusFilter } from "./filtersSlice";

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, handleRejected)
//       .addCase(addTask.pending, handlePending)
//       .addCase(addTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(deleteTask.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (task) => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteTask.rejected, handleRejected)
//       .addCase(toggleCompleted.pending, handlePending)
//       .addCase(toggleCompleted.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           (task) => task.id === action.payload.id
//         );
//         state.items.splice(index, 1, action.payload);
//       })
//       .addCase(toggleCompleted.rejected, handleRejected);
//   },
// });

// export default tasksSlice.reducer;

// // Selectors

// export const selectTasks = (state) => state.tasks.items;

// export const selectIsLoading = (state) => state.tasks.isLoading;

// export const selectError = (state) => state.tasks.error;

// export const selectVisibleTasks = (state) => {
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);

//   switch (statusFilter) {
//     case "active":
//       return tasks.filter((task) => !task.completed);
//     case "completed":
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const selectTaskCount = (state) => {
//   const tasks = selectTasks(state);

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// };

// * 14
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";
import { selectStatusFilter } from "./filtersSlice";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export default tasksSlice.reducer;

// Selectors

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks");

    switch (statusFilter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
