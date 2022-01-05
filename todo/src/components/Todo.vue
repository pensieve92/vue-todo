<template>
  <div class="mb-2 d-flex">
    <div>
      {{todo.checked}}
      <input
          type="checkbox"
          :checked="todo.checked"
          @change="toggleCheckbox"
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
      console.log("Todo", e.target.checked)
      this.$emit('toggle-checkbox',{
        id: this.todo.id,
        checked: e.target.checked
      })
    },
    clickDelete(){
      this.$emit('click-delete', this.todo.id)
    }
  }
}
</script>
