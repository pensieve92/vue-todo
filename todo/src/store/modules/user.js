import axios from "axios";

export default {
    namespaced: true,
    state: { //data
        users: []
    },
    mutations: { //state 변경
        SET_USERS(state, users){
            state.users = users
        },
    },
    actions: { //methods
        getUsers({commit}){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data)
            });
        },

    },

}
