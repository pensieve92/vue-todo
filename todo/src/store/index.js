import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { //data
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'take a rest', checked: false}
        ]

    },
    mutations: { //state 변경
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            })
        },
        TOGGLE_TODO(state, {id, checked}) {
            console.log("TOGGLE_TODO", id, checked);
            const index = state.todos.findIndex(todo => todo.id === id);
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }


    },
    actions: { //methods

    },
    getters: { //computed

    }
})
