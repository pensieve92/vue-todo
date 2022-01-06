<template>
  <div>
    Complete Todo : {{numberOfCompletedTodo}}
    {{todos}}
  </div>
</template>

<script>
export default {
  name: "CompletedTodo",
  props: {

  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
    numberOfCompletedTodo(){
      // return this.todos.filter(todo => todo.checked === true).length;
      return this.$store.getters['todo/umberOfCompletedTodo'];
    }
  }
}
</script>

<style scoped>

</style>