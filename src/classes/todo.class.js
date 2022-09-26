
export class Todo {

    static fromJson({ id, tarea, completado, creado }) {
        // Reconstruyendo instancias de clases
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.complatado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime(); // 12836871263
        this.complatado = false;
        this.creado     = new Date();
    }
}