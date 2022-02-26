<template>
  <div>

    <slot name="header"></slot>
    <div>좋아요</div>
    <div>{{ propsData }}</div>
    <slot name="footer"></slot>

  </div>
</template>

<script>
export default {
  name : "Like",
  data() {
    return {
      propsData: 0,
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.propsData = this.cnt + 1;
    }
  },
  props: {
    cnt: {
      type   : Number,
      default: 0
    },
  },
}
</script>

<style scoped>

</style>