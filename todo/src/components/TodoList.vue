<template>
  <div>
    <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
    />
  </div>
</template>
<script>
import Todo from "@/components/Todo"

export default {
  name: 'TodoList',
  components: {Todo},
  props: {
  },
  methods:{
    toggleCheckbox(value){
      this.$emit('toggle-checkbox', value);
    },
    deleteTodo(todoId){
      this.$emit('delete-todo', todoId);
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  }
}
</script>