<template>
  <button @click="click()" :id="id" class="btn" :class="cssClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    'text': '',
    'id': '',
    'color': '',
    'size': ''
  },
  computed: {
    cssClass () {
      var color = 'default'
      if (this.color) {
        color = this.color
      }
      if (this.size) {
        return `btn-${color} btn-${this.size}`
      }
      return `btn-${color}`
    }
  },
  methods: {
    click: function (id) {
      // 通过this.$root.eventHub获取此对象
      // 调用$emit 方法
      this.$root.eventHub.$emit('btnclick', this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
