import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList  = new TodoList();

// Guardar y recuperar toDo
// todoList.todos.forEach( todo => crearTodoHtml( todo )); // Es igual a:
todoList.todos.forEach( crearTodoHtml );


// 


/*
const tarea     = new Todo('Aprender JavaScript');

todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHtml( tarea );
*/

/*
localStorage.setItem('my-key', 'ABC1234');
sessionStorage.setItem('my-key', 'ABC1234');

setTimeout( () => {
    localStorage.removeItem('my-key');
}, 1500);
*/