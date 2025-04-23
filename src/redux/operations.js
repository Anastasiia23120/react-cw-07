// * 1
// import axios from "axios";

// // Встановлюємо базову URL-адресу
// // для всіх запитів axios
// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// // Оголошення асинхронної операції
// // fetchTasks для отримання даних
// const fetchTasks = () => async (dispatch) => {
//   try {
//     // Виконуємо GET-запит до "/tasks"
//     // для отримання списку завдань
//     const response = await axios.get("/tasks");

//     // Тут буде код для обробки відповіді,
//     // наприклад, dispatch отриманих даних
//   } catch (e) {
//     // У випадку помилки ми можемо обробити її тут
//   }
// };

// * 2
// import axios from "axios";
// import { fetchInProgress, fetchSuccess, fetchError } from "./tasksSlice";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchInProgress());
//     // HTTP-запит
//     const response = await axios.get("/tasks");
//     // Обробка даних
//     dispatch(fetchSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchError(e.message));
//   }
// };

// * 3
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = createAsyncThunk("tasks/fetchAll", async () => {
//   const response = await axios.get("/tasks");
//   return response.data;
// });

// * 4
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = createAsyncThunk(
//   "tasks/fetchAll",
//   // Використовуємо символ підкреслення як ім'я першого параметра,
//   // тому що в цій операції він нам не потрібен
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/tasks");
//       // При успішному запиті повертаємо проміс із даними
//       return response.data;
//     } catch (e) {
//       // При помилці запиту повертаємо проміс
//       // який буде відхилений з текстом помилки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// * 5
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = createAsyncThunk(
//   "tasks/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/tasks");
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// * 6
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const addTask = createAsyncThunk(
//   "tasks/addTask",
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post("/tasks", { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// * 7
// export const deleteTask = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// *  8
// export const toggleCompleted = createAsyncThunk(
//   "tasks/toggleCompleted",
//   async (task, thunkAPI) => {
//     try {
//       const response = await axios.put(`/tasks/${task.id}`, {
//         completed: !task.completed,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// * 9
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
