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

    },
    actions: { //methods

    },
    getters: { //computed

    }
})
