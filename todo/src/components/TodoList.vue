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
    deleteTodo: {},
    todos: {},
    // toggleCheckbox: {}
  },
  methods:{
    toggleCheckbox(obj){
      console.log("TodoList", obj);
      this.$emit('toggle-checkbox', obj)
    }
  }
}
</script>