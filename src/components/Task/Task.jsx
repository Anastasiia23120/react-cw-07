// * 1
// import { useDispatch } from "react-redux";
// import { MdClose } from "react-icons/md";
// import css from "./Task.module.css";

// export const Task = ({ task }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className={css.wrapper}>
//       <input
//         type="checkbox"
//         className={css.checkbox}
//         checked={task.completed}
//       />
//       <p className={css.text}>{task.text}</p>
//       <button className={css.btn}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };

// * 2
// import { useDispatch } from "react-redux";
// import { MdClose } from "react-icons/md";
// import { deleteTask } from "../../redux/operations";

// export const Task = ({ task }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteTask(task.id));

//   return (
//     <div>
//       <input type="checkbox" checked={task.completed} />
//       <p>{task.text}</p>
//       <button onClick={handleDelete}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };

// * 3
// import { useDispatch } from "react-redux";
// import { MdClose } from "react-icons/md";
// import { deleteTask, toggleCompleted } from "../../redux/operations";

// export const Task = ({ task }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteTask(task.id));

//   const handleToggle = () => dispatch(toggleCompleted(task));

//   return (
//     <div>
//       <input type="checkbox" checked={task.completed} onChange={handleToggle} />
//       <p>{task.text}</p>
//       <button onClick={handleDelete}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };

// * 4
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
