// * 1
// import { useSelector } from "react-redux";
// import { Task } from "../Task/Task";
// import css from "./TaskList.module.css";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case "active":
//       return tasks.filter((task) => !task.completed);
//     case "completed":
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.items);
//   const statusFilter = useSelector((state) => state.filters.status);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map((task) => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// * 2
// import { useSelector } from "react-redux";
// import { Task } from "../Task/Task";
// import { selectTasks } from "../../redux/tasksSlice";
// import { selectStatusFilter } from "../../redux/filtersSlice";
// import css from "./TaskList.module.css";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case "active":
//       return tasks.filter((task) => !task.completed);
//     case "completed":
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(selectTasks);
//   const statusFilter = useSelector(selectStatusFilter);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map((task) => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// * 3
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { selectVisibleTasks } from "../../redux/tasksSlice";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
