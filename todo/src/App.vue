<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo
        :todos="todos"
    />
    <AddTodo
        @add-todo="addTodo"
    />
    <hr/>
    <TodoList
        :todos="todos"
        @toggle-checkbox="toggleCheckbox"
        @delete-todo="deleteTodo"
    />
    {{todos}}
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
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'take a rest', checked: false}
      ]
    }
  },
  methods:{
    addTodo(value){
      this.todos.push({
            id: Math.random(),
            text: value,
            checked: false
          })
      this.todoText = '';
    },
    toggleCheckbox({id, checked}){
      const index = this.todos.findIndex(todo => todo.id === id);
      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => todo.id === id);
      // this.todos.splice(index, 1);

      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

