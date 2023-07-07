import { Todo } from '../todos/models/todo.models';

const Filters = {
  All: 'all',
  Pending: 'pending',
  Completed: 'completed',
};

const state = {
  todos: [
    new Todo('Aprender JS'),
    new Todo('Aprender Angular'),
    new Todo('Aprender Java'),
    new Todo('Aprender Spring'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
};

/**
 * Obtener lista de tareas
 * @param {String} filter Opción de filtro 'all', 'pending' o 'completed'
 * @returns {Array<Todo>} Array de objetos Todo
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case filter.All:
      return [...state.todos];
    case filter.Pending:
      return state.todos.filter((todo) => !todo.done);
    case filter.Completed:
      return state.todos.filter((todo) => todo.done);
    default:
      throw new Error(`Option ${filter} is not valid.`);
  }
};

/**
 * Agregar tarea
 * @param {String} description Descripción de la tarea
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required.');
  state.todos.push();
};

/**
 * Eliminar tarea
 * @param {String} todoId Id de tarea
 * @returns {Array<Todo>} Array de objetos Todo
 */
const deleteTodo = (todoId) => {
	if (!todoId) throw new Error('TodoId is required.');
  return state.todos.filter((todo) => todo.id !== todoId);
};

/**
 * Eliminar tareas completadas
 * @returns {Array<Todo>} Array de objetos Todo
 */
const deleteCompleted = () => {
  return state.todos.filter((todo) => todo.done);
};

/**
 * Establecer filtro
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
	if (!Object.keys(Filters).includes(newFilter)) throw new Error(`Option ${newFilter} is not valid.`)
	state.filter = newFilter;
}

/**
 * Obtener filtro actual
 * @returns {Filters} filter
 */
const getCurrentFilter = () => {
	return state.filter;
}

export default {
	addTodo,
	deleteCompleted,
	deleteTodo,
	getCurrentFilter,
	getTodos,
	setFilter,
  initStore,
};
