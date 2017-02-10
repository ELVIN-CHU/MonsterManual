<template>
  <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading">{{heading}}</div>
    <div class="panel-body">
      <p>{{body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    'heading': '',
    'body': ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
