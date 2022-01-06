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
  methods:{
    toggleCheckbox(e){

      this.$store.dispatch("toggleCheckbox",{
        id: this.todo.id,
        checked: e.target.checked
      })

      // this.$store.commit("TOGGLE_TODO",{
      //   id: this.todo.id,
      //   checked: e.target.checked
      // })

    },
    clickDelete(){
      this.$store.dispatch("clickDelete", this.todo.id);
      // this.$store.commit("DELETE_TODO", this.todo.id);
    }
  }
}
</script>
