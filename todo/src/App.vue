<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <AddTodo
        :add-todo="addTodo"
        :todo-text="todoText"
    />
    <hr/>
<!--    <TodoList-->
<!--        :delete-todo="deleteTodo"-->
<!--        :todos="todos"-->
<!--        :toggle-checkbox="toggleCheckbox"-->
<!--    />-->
    <TodoList
        :delete-todo="deleteTodo"
        :todos="todos"
        @toggle-checkbox="toggleCheckbox"
    />
    {{todos}}
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default {
  components: {AddTodo, TodoList},
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
    addTodo(e){
      this.todos.push({
            id: Math.random(),
            text: e.target.value,
            checked: false
          })
      this.todoText = '';
    },
    toggleCheckbox({id, checked}){
      console.log('toggleCheckbox', id, checked);
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

