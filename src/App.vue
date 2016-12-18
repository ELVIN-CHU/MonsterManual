<template>
  <div id="app" class="col-xs-12 col-sm-6 col-md-8">
    <img src="./assets/mhx.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/bootstrap";
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
