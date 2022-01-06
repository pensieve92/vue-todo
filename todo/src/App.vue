<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo
    />
    <AddTodo/>
    <hr/>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import CompletedTodo from "@/components/CompletedTodo";

export default {
  components: {AddTodo, TodoList, CompletedTodo},
  data() {
    return {
    }
  },
  methods:{
  }
}
</script>

