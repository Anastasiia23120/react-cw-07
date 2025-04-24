// * 1
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// * 2
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTasks } from "redux/operations";

// export const App = () => {
//   const dispatch = useDispatch();
//   // Отримуємо частини стану
//   const { items, isLoading, error } = useSelector((state) => state.tasks);

//   // Викликаємо операцію
//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   // Рендерим розмітку в залежності від значень у стані
//   return (
//     <div>
//       {isLoading && <p>Loading tasks...</p>}
//       {error && <p>{error}</p>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// };

// * 3
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTasks } from "../../redux/operations";

// export const App = () => {
//   const dispatch = useDispatch();
//   const { items, isLoading, error } = useSelector((state) => state.tasks);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <div>
//       {isLoading && <b>Loading tasks...</b>}
//       {error && <b>{error}</b>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// };

// * 4
// import { AppBar } from "../AppBar/AppBar";
// import { TaskForm } from "../TaskForm/TaskForm";
// import { TaskList } from "../TaskList/TaskList";
// import css from "./App.module.css";

// export default function App() {
//   return (
//     <div className={css.container}>
//       <AppBar />
//       <TaskForm />
//       <TaskList />
//     </div>
//   );
// }

// * 5
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchTasks } from "../../redux/operations";
// // Імпорти компонентів

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <div>
//       <AppBar />
//       <TaskForm />
//       <TaskList />
//     </div>
//   );
// }

// * 6
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTasks } from "../../redux/operations";
// // Тут решта імпортів компонентів

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector((state) => state.tasks.isLoading);
//   const error = useSelector((state) => state.tasks.error);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <div>
//       <AppBar />
//       <TaskForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <TaskList />
//     </div>
//   );
// }

// * 7
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppBar } from "../AppBar/AppBar";
// import { TaskForm } from "../TaskForm/TaskForm";
// import { TaskList } from "../TaskList/TaskList";
// import { fetchTasks } from "../../redux/operations";
// import css from "./App.module.css";

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector((state) => state.tasks.isLoading);
//   const error = useSelector((state) => state.tasks.error);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <AppBar />
//       <TaskForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <TaskList />
//     </div>
//   );
// }

// * 8
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppBar } from "../AppBar/AppBar";
// import { TaskForm } from "../TaskForm/TaskForm";
// import { TaskList } from "../TaskList/TaskList";
// import { fetchTasks } from "../../redux/operations";
// import { selectIsLoading, selectError } from "../../redux/tasksSlice";
// import css from "./App.module.css";

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <AppBar />
//       <TaskForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <TaskList />
//     </div>
//   );
// }

// * 9
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/operations";
import { selectIsLoading, selectError } from "../../redux/tasksSlice";
import css from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
};
