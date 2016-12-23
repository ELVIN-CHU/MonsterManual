<template>
  <div>
    <button :id="id" class="btn" :class="cssClass">{{ text }}</button>
  </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
