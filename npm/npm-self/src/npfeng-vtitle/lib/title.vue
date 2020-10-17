<template>
  <div class="v-title" @click="myClick">{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    myClick() {
      this.$emit('myclick', this.title)
    },
  },
}
</script>

<style lang="scss">
.v-title {
  font-size: 24px;
}
</style>
