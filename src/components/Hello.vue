<template>
  <div>
    <h1>{{ msg }}</h1>
    <button id="test" class="btn btn-danger btn-lg">test</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to MonsterManual!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
