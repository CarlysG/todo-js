import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

        // this.todos = []; // Ahora se utilizara localStorage para almacenar info e inicializar
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ) {

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {
            if( todo.id == id ) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ));
    }

    cargarLocalStorage() {

        // Forma corta
        this.todos = ( localStorage.getItem('todo') ) 
                    ? JSON.parse( localStorage.getItem('todo') ) 
                    : [];

        /* Forma Larga
        if( localStorage.getItem('todo') ) {
            this.todos = JSON.parse( localStorage.getItem('todo') );
        } else {
            this.todos = [];
        }
        */

        // .map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );

    }

}