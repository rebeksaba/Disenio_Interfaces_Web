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

function eliminarTarea(id) 