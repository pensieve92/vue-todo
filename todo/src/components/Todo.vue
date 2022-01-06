<template>
  <div class="mb-2 d-flex">
    <div>
      {{todo.checked}}
      <input
          type="checkbox"
          :checked="todo.checked"
          @click="toggleCheckbox"
      />
    </div>
    <span
        class="ml-3 flex-grow-1"
        :class="todo.checked ? 'text-muted' : ''"
        :style="todo.checked ? 'text-decoration: line-through' : '' "
    >
      {{ todo.text }}
    </span>
    {{numberOfCompletedTodo}}
    <button
        class="btn btn-danger btn-sm"
        @click="clickDelete"
    >
      Delte
    </button>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props:{
    todo: {
      type: Object,
      require: true
    }
  },
  computed: {
    numberOfCompletedTodo(){
      return this.$store.getters['todo/numberOfCompletedTodo']
    }
  },

  methods:{
    toggleCheckbox(e){

      this.$store.dispatch("todo/toggleCheckbox",{
        id: this.todo.id,
        checked: e.target.checked
      })

      // this.$store.commit("TOGGLE_TODO",{
      //   id: this.todo.id,
      //   checked: e.target.checked
      // })

    },
    clickDelete(){
      this.$store.dispatch("todo/clickDelete", this.todo.id);
      // this.$store.commit("DELETE_TODO", this.todo.id);
    }
  }
}
</script>
