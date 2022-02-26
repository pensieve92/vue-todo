import axios from "axios";

export default {
    namespaced: true,
    state     : { //data
        users: []
    },
    mutations : { //state 변경
        SET_USERS(state, users) {
            state.users = users
        },
    },
    actions   : { //
        // await이 붙은 경우: start -> finally -> end
        // await이 없는 경우: start -> end -> finally
        async getUsers({commit}) {
            console.log('start');
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    commit('SET_USERS', res.data)
                })
                .catch(err => {
                    console.log(err);
                }).finally(function () {
                    console.log('finally');
                }
            );
            console.log('end');
        },

    },

}
