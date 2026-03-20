//Requisitos:
//....1. Crea un array vacio para las tareas.
//....2. Cada tarea: { id, titulo, estado: 'pendiente' }
//....3. Función agregarTarea(titulo):
//..........-Crea el objeto y lo añade con push().
//....4. Función completarTarea(id):
//..........-Usa .find() para buscar la tarea.
//..........-Cambia su estado a 'completada'.
//....5. Función eliminarTarea(id):
//..........-Usa .filter() para eliminarla del array.
//....6. Función listarPorEstado(estado):
//..........-Filtra y muestra las tareas de ese estado.
//....7. Función resumen():
//..........-Muestra cuantas pendientes y completas hay.
//*******************************************************

let tareas =[];
let nextId = 1;

function agregarTarea(titulo) {
    let tarea= {
        id: nextId++,
        titulo: titulo,
        estado: 'pendiente'
    };
    tareas.push(tarea);
}

function completarTarea(id) {
    let tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.estado = 'completada';
    }else {
        console.log("Tarea no encontrada");
    }
}

function eliminarTarea(id){
    tareas = tareas.filter(t => t.id !== id);
}

function listarPorEstado(estado){
    let filtradas = tareas.filter(t => t.estado === estado);
    console.log("Tareas " + estado + ": " + filtradas.map(t => t.titulo).join(", "));

}

function resumen() {
    let pendientes = tareas.filter(t => t.estado === 'pendiente').length;
    let completadas = tareas.filter(t => t.estado === 'completada').length;
    console.log("Resumen: " + pendientes + ", pendientes: " + completadas + " completadas");
}

/*let tareas = [];
let nextId = 1;
tareas = [{id:1, titulo:"Estudiar JavaScript", estado:"pendiente"},
{id:2, titulo:"Hacer ejercicio 4", estado:"pendiente"},
{id:3, titulo:"Repasar arrays", estado:"pendiente"}] */

agregarTarea("Estudiar JavaScript");
agregarTarea("Hacer ejercicio 4");
agregarTarea("Repasar arrays");

completarTarea(1);

//tarea={id:1, titulo:"Estudiar JavaScript", estado:"completada"}
//tareas = [{id:1, titulo:"Estudiar JavaScript", estado:"completada"},{id:2, titulo:"Hacer ejercicio 4", estado:"pendiente"},{id:3, titulo:"Repasar arrays", estado:"pendiente"}]

//eliminarTarea(2);

listarPorEstado("pendiente");
//Tareas pendientes: Hacer ejercicio 4, Repasar arrays
listarPorEstado("completada");
//Tareas completadas: Estudiar JavaScript

resumen();
//Resumen: 2 pendientes, 1 completada

//Demo de uso:
//agregarTarea("Estudiar JavaScript");
//agregarTarea("Hacer ejercicio 4");
//agregarTarea("Repasar arrays");
