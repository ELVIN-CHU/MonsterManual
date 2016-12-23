<template>
  <div id="app">
    <banner></banner>
    <hello :msg='sign'></hello>
    <btn v-for='data in datas' :id='data.id' :text="data.val" :color="data.color" :size='data.size'></btn>
  </div>
</template>

<script>
import Hello from './components/Hello'
import banner from './components/Banner'
import btn from './components/btn'

export default {
  name: 'app',
  components: {
    banner,
    Hello,
    btn
  },
  data () {
    return {
      datas: [
        { id: 1, val: 'START', color: 'danger', size: 'lg' },
        { id: 2, val: 'CONTINUE', color: 'danger', size: 'lg' },
        { id: 3, val: 'OPTIONS', color: 'danger' },
        { id: 4, val: 'DOWNLOAD' }
      ],
      sign: 'Monster Manual For Cross!'
    }
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
  width:auto;
}
</style>
