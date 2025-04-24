// * 1
// import { useSelector } from "react-redux";
// import css from "./TaskCounter.module.css";

// export const TaskCounter = () => {
//   const tasks = useSelector((state) => state.tasks.items);

//   const count = tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );

//   return (
//     <div>
//       <p className={css.text}>Active: {count.active}</p>
//       <p className={css.text}>Completed: {count.completed}</p>
//     </div>
//   );
// };

// * 2
// import { useSelector } from "react-redux";
// import { selectTasks } from "../../redux/tasksSlice";
// import css from "./TaskCounter.module.css";

// export const TaskCounter = () => {
//   const tasks = useSelector(selectTasks);

//   const count = tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );

//   return (
//     <div>
//       <p className={css.text}>Active: {count.active}</p>
//       <p className={css.text}>Completed: {count.completed}</p>
//     </div>
//   );
// };

// * 3
// import { useSelector } from "react-redux";
// import { selectTaskCount } from "../../redux/tasksSlice";
// import css from "./TaskCounter.module.css";

// export const TaskCounter = () => {
//   const { active, completed } = useSelector(selectTaskCount);

//   return (
//     <div>
//       <p className={css.text}>Active: {active}</p>
//       <p className={css.text}>Completed: {completed}</p>
//     </div>
//   );
// };

// * 4
import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/tasksSlice";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
