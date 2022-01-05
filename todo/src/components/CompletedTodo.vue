<template>
  <div>
    Complete Todo : {{numberOfCompletedTodo}}
  </div>
</template>

<script>
export default {
  name: "CompletedTodo",
  props: {
    todos: {
      type: Array,
      required: true
    },
  },
  computed: {
    numberOfCompletedTodo(){
      return this.todos.filter(todo => todo.checked === true).length;
    }
  }
}
</script>

<style scoped>

</style>