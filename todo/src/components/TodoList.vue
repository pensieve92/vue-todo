<template>
  <div>
    <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
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

  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  }
}
</script>