import { Todo } from "../classes";
// Se importa la funcion de la lista de tareas
import { todoList } from '../index';

// Referencia en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');
const ulFiltors   = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

// Para crear el HTML de la lista de tareas
export const crearTodoHtml = ( todo ) => {

    const htmlTodo =  `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    // Se crea el elemento padre
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // Se añade la tarea al elemento padre
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

// Evento: Ingresar tarea
txtInput.addEventListener('keyup', ( event ) => {

    // console.log(event);
    //Validamos cuando el usuario preciona enter e ingreso valor en el input
    if( event.keyCode === 13 && txtInput.value.length > 0 ) {

        // console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        // Se agrega la tarea a la lista del HTML
        crearTodoHtml( nuevoTodo );
        // Se reinicia el input de la tarea
        txtInput.value = '';
        
    }

});

divTodoList.addEventListener('click', ( event ) => {

    // El evento click detecta cualquier click dentro del divTodoList
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    if( nombreElemento.includes('input') ) { //click en el check. Para marcar o desmarcar
       
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ) { // Para eliminar tareas individuales en la lista

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }

     console.log( todoList );

});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed') ) {

            divTodoList.removeChild(elemento);
        }

    }
    
});

// Filtros
ulFiltors.addEventListener('click', (event) => {

    // console.log(event.target.text);

    const filtro = event.target.text;
    if( !filtro ){ return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;
        }

    }

});