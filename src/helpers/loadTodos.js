import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadTodos = async (uid) => {
  const todosSnap = await getDocs(collection(db, `${uid}/api/todos`));
  const todos = [];

  todos.forEach((todo) => {
    todos.push({
      id: todo.id,
      ...todo,
    });
  });

  console.log(todos);
  return todos;
};
