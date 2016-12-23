<template>
  <div>
    <h1>{{ msg }}</h1>
    <button id="test" class="btn btn-danger btn-lg">test</button>
  </div>
</template>

<script>
export default {
  name: 'switch',
  data () {
    return {
      msg: 'banner'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
