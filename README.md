# React  Todo List
Aplicación de lista de tareas pendientes que permite ver la lista de tareas, agregar tareas, editar tareas, marcar como completada y eliminar tareas.
## Estados
Se definen dos dos estados llamados: todos (almacena la lista de tareas) y todoEditing (almacena el id de la tarea editada).
## Efecto
***useEffect(() => {...}, []):***
- *const json = localStorage.getItem("todos")*: Lee datos de la tarea de almacenamiento local.
* *const loadedTodos = JSON.parse(json)*: Convierte datos de formato JSON a Javascript.
+ *if (loadedTodos) { setTodos(loadedTodos)*: Actualiza las tareas si es que se cargaron nuevas al almacenamiento loca.

### Función handleSubmit.
Esta función se ejecuta cuando se agrega una nueva tarea.
- ***let todo = document.getElementById('todoAdd').value***: Obtiene el valor del campo de entrada donde el usuario escribió la nueva tarea.
* newTodo que representa la nueva tarea.
Asigna un:
  - **id único**.
  - **el texto de la tarea obtenido del campo de entrada**.
  - **estado inicial (completado) falso**.
+ ***(newTodo.text.length > 0)***,verifica si el texto de la tarea no está vacío . 
No vacío= agrega la nueva tarea.
Vacío= muestra alerta.
***document.getElementById('todoAdd').value = ""***, limpia el campo de entrada.
![Captura de pantalla 2024-03-20 102951](https://github.com/Valeriagalaviz/React-TodoList/assets/71987380/339dd383-d555-4839-8a0d-f3981e4edb57)

### Función deleteTodo.
Función que se ejecuta cuando se elimina una tarea
- Recibe el id de la tarea que se va a eliminar.
* Crea una copia del array de tareas utilizando el spread operator ***([...todos])***.
+ Actualiza el de las tareas con setTodos.

### Función toggleComplete.
Se ejecuta cuando se cambia el estado de la tarea a completado.
- Recibe el id de la tarea cuyo estado se va a cambiar.
* Crea una copia del array de tareas utilizando el spread operator ***([...todos])***.
+ Utiliza el método map para recorrer todas las tareas y modificar el estado completed de la tarea.
- Actualiza el estado de todos con las tareas actualizadas utilizando setTodos.

![Captura de pantalla 2024-03-20 103116](https://github.com/Valeriagalaviz/React-TodoList/assets/71987380/3b03a6df-1cd6-44b4-97e4-65bdaf6f5c7c)

### Función submitEdits.
Se ejecuta cuando se quiere editar alguna tarea.
- Recibe como parámetro la tarea modificada ***(newtodo)***.
* Utiliza la función *_map_*, comprueba si el id de la tarea actual coincide con el id de la tarea que se está editando (newtodo.id).
+ Si coincide el id se actualiza el texto de la tarea todo.text. 
- Retorna tarea actualizada o sin cambios.
* Actualiza el estado con las tareas actualizadas  usando setTodos.

![Captura de pantalla 2024-03-20 103841](https://github.com/Valeriagalaviz/React-TodoList/assets/71987380/49a9b6fc-673c-4fc4-b28c-9194001ba133)

## Conclusiones del desarrollo de la práctica
Esta práctica me permitió seguir el paso a paso el desarrollo de una aplicación con React para aplicar algunos de los conceptos que se han abordado durante las sesiones de clase, como los son: componentes, estados, propr, eventos y su ciclo de vida. La creación de una lista de tareas nos permite analizar sobre cómo podemos implementar estos conceptos y ponerlos en práctica, plasmarlos en una interfaz gráfica dinámica que actualiza cambios que son guardados en el almacenamiento local haciendo uso de botones, checkbox y campos de entradas que realizan acciones determinadas.

## Aprendizaje y uso de la plataforma Skills Network
La plataforma Skills Network nos permite hacer uso de los recurso y herramientas de aprendizaje, me facilitó al momento de desarrollar el código en React ya que te explica de forma detallada y estructurada el paso a paso de la práctica (esto facilita el proceso de aprendizaje) ayudándome a comprender conceptos-fundamentos de React y cómo es posible aplicarlos a diferentes proyectos.


