<template>
  <div id="index">
    <banner></banner>
    <hello :msg='sign'></hello>
    <div class="rowline" v-for='data in datas'>
      <btn :id='data.id' :text="data.val" :color="data.color" :size='data.size'></btn>
    </div>
  </div>
</template>

<script>
import Hello from './Hello'
import banner from './Banner'
import btn from './btn'

export default {
  name: 'index',
  components: {
    banner,
    Hello,
    btn
  },
  data () {
    return {
      datas: [
        { id: 'btn1', val: 'START', color: 'danger', size: 'lg' },
        { id: 'btn2', val: 'CONTINUE', color: 'danger', size: 'lg' },
        { id: 'btn3', val: 'OPTIONS', color: 'danger', size: 'lg' },
        { id: 'btn4', val: 'DOWNLOAD', size: 'lg' }
      ],
      sign: 'Monster Manual For Cross!'
    }
  }
}
</script>

<style scoped lang="scss">
  .rowline{
    margin: 10px;
  }
  button{
    width: 35%;
  }
</style>
