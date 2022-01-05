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
      return this.$store.state.todos;
    },
    numberOfCompletedTodo(){
      return this.todos.filter(todo => todo.checked === true).length;
    }
  }
}
</script>

<style scoped>

</style>