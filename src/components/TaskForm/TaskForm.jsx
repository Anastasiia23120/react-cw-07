// * 1
// import { useDispatch } from "react-redux";
// import { Button } from "../Button/Button";
// import css from "./TaskForm.module.css";

// export const TaskForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input
//         className={css.field}
//         type="text"
//         name="text"
//         placeholder="Enter task text..."
//       />
//       <Button type="submit">Add task</Button>
//     </form>
//   );
// };

// * 2
// import { useDispatch } from "react-redux";
// import { addTask } from "redux/operations";

// export const TaskForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     dispatch(addTask(event.target.elements.text.value));
//     form.reset();
//   };

//   // Решта коду компонента
// };
// * 3
import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addTask } from "../../redux/operations";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
