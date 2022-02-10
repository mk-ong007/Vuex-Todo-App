import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        name: "Set your goal",
        completed: false
      },
      {
        name: "Programmer",
        completed: false
      },
      {
        name: "Gym and lunch",
        completed: false
      },
      {
        name: "Learning",
        completed: false
      },
      {
        name: "Family time",
        completed: false
      },
      {
        name: "Brain work",
        completed: false
      },
    ]
  },
  getters: {
    completedTodos(state){
      return state.todos.filter(todo => {
        return todo.completed == true;
      }).length;
    },
    pendingTodos(state){
      return state.todos.filter(todo => {
        return todo.completed == false;
      }).length;
    }
  },
  mutations: {
    ADD_NEW_TODO(state, newTodo){
      state.todos.push({name: newTodo, completed: false});
    },
    DELETE_TODO(state, todo){
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    CHANGE_TODO_STATUS(state, todo){
      todo.completed = !todo.completed;
    }
  },
  actions: {
    addNewTodo({commit}, newTodo){
      commit('ADD_NEW_TODO', newTodo);
    },
    deleteTodo({commit}, todo){
      commit('DELETE_TODO', todo);
    },
    changeTodoStatus({commit}, todo){
      commit('CHANGE_TODO_STATUS', todo);
    }
  },
  modules: {
  }
})
