<template>

  <div>
    <h2>User List</h2>
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: "UserList.vue",
  created(){
    this.getUsers();
  },
  computed: {
    ...mapState({users : state => state.user.users})
    // users(){
    //   return this.$store.state.users
    // },

  },
  methods: {
    ...mapActions('user', ['getUsers'])
    // getUsers(){
    //   this.$store.dispatch('getUsers')
    // }
  }

}
</script>

<style scoped>

</style>