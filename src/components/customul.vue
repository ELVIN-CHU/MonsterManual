<template>
    <ul class="list-inline">
      <li class="list-group-item centerText" v-for='data in datas'>{{ data.text }}</li>
    </ul>
</template>

<script>
export default {
  name: 'customul',
  props: {
    'datas': {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline{
  display: inline-flex;
}
.centerText{
  width: 14%;
  text-align: center;
}
</style>
