<template>

  <div>
    <h2>User List</h2>
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
  </div>
</template>

<script>


export default {
  name: "UserList.vue",
  created(){
    this.getUsers();
  },
  computed: {
    users(){
      return this.$store.state.users
    }
  },
  methods: {
    getUsers(){
      this.$store.dispatch('getUsers')
    }
  }

}
</script>

<style scoped>

</style>