import { db } from "../firebase/firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore"

const getAllTodos = () => {
    return getDocs(collection(db, "todos"));
};

const createTodo = (data) => {
    return addDoc(collection(db, "todos"), data)
};

const updateTodo = (id,data) => {
    const updatedTodoById = doc(db, "todos", id);
    return updateDoc(updatedTodoById,data);

};

const deleteTodo = (id) => {
    const deleteTodoById = doc(db, "todos", id);
    return deleteDoc(deleteTodoById);
};

export const todoService = {
    createTodo,
    getAllTodos,
    deleteTodo,
    updateTodo
}