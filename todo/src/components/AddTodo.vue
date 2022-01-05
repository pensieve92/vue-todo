<template>
  <input
      v-model="todoText"
      type="text"
      class="w-100 p-2"
      placeholder="Type todo"
      @keyup.enter="addTodo"
  />
</template>
<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todoText:''
    }
  },
  props: {
    addTodo: {},
    // todoText: {}
  }
}
</script>