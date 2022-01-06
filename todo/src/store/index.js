import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: { //data
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'take a rest', checked: false}
        ],
        users: []

    },
    mutations: { //state 변경
        SET_USERS(state, users){
            state.users = users
        },
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
        getUsers({commit}){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data)
            });
        },
        addTodo({commit}, value) {
            //비동기 작업, axios.post DB역할 settimeout
            setTimeout(function() {
                commit('ADD_TODO', value);
            }, 1000)
        },
        toggleCheckbox({commit}, payload){
            setTimeout(function() {
                commit('TOGGLE_TODO', payload);
            }, 1000)
        },
        clickDelete({commit}, todoId){
            setTimeout(function() {
                commit('DELETE_TODO', todoId);
            }, 1000)
        }
    },
    getters: { //computed

    }
})
