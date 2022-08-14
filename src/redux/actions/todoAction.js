import { types } from "../types/types";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import Swal from "sweetalert2";

// Cargnado todos los todos
export const startLoadingTodos = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const querySnapshot = await getDocs(collection(db, `${uid}/api/todos`));
    querySnapshot.forEach((doc) => {
      const allTodos = {
        id: doc.id,
        ...doc.data(),
      };
      dispatch(setTodos(allTodos));
    });
    
  };
};

// Agregando un nuevo todo
export const startAddNewTodo = (title) => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const newTodo = {
        title,
        status: false
      }
      await addDoc(collection(db, `${uid}/api/todos`), newTodo);
      dispatch(addNewTodo(newTodo))
    } catch (error) {
      console.log(error)
    }

  };
};

export const startActiveTodo = (id) => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const statusNew = { id, status: true  }
      await updateDoc(doc(db, `${uid}/api/todos/${id}`), {status: statusNew.status})
      dispatch(activeTodo(statusNew))
    } catch (error) {
      console.log(error)
      Swal.fire('Error', 'No pudo actializar el estado del todo correctamente!', 'error')
    }
  }
}

export const startDesactiveTodo = (id) => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const statusNew = { id, status: false  }
      await updateDoc(doc(db, `${uid}/api/todos/${id}`), {status: statusNew.status} )
      dispatch(desactiveTodo(statusNew))
    } catch (error) {
      console.log(error)
      Swal.fire('Error', 'No pudo actualizar el estado del todo correctamente!', 'error')
    }
  }
}

// Eliminar todo de la aplicacion
export const startDeleteTodo = (id) => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      await deleteDoc(doc(db, `${uid}/api/todos/${id}`))
      dispatch(removeTodo(id))
    } catch (error) {
      console.log(error)
      Swal.fire('Error', 'El todo no pudo eliminarse', 'error')
    }
  }
}

// export const startClearTodoCompleted = () => {
//   return (dispatch, getState) => {
//     try {
//       const { uid } = getState().auth;
//       await arrayRemove(doc(db, `${uid}/api/todos`,  ))
//     } catch (error) {
//       console.log(error)
//       Swal.fire('Error', 'Los todos completados no pudieron eliminarse!', 'error')
//     }
//   }
// }

// Cargando todos los todos al store
const setTodos = (todos) => {
  return {
    type: types.loadAllTodo,
    payload: todos,
  };
};

const addNewTodo = (todo) => ({
  type: types.addNewTodo,
  payload: todo,
});

// Activando un todo
const activeTodo = (arg) => ({
  type: types.activeTodo,
  payload: arg,
});

// Desactive un todo
const desactiveTodo = (arg) => ({
  type: types.desativeTodo,
  payload: arg,
});

// Eliminando un todo
const removeTodo = (id) => ({
  type: types.deleteTodo,
  payload: id,
});

// Eliminar los todo completados
const deleteTodoCompleted = () => ({
  type: types.clearCompleteTodo,
})

// Filtrar todo activos
export const typeFilter = (type) => ({
  type: types.typeFilter,
  payload: type
})