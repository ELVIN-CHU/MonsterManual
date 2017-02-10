<template>
  <div id="monster">
    <div class="list" v-for='data in datas'>
      <btn :id='data.id' :text="data.val" :color="data.color" :size='data.size'></btn>
      <customul :datas='data.uldatas'></customul>
    </div>
  </div>
</template>

<script>
import customul from './customul'
import btn from './btn'

export default {
  name: 'monster',
  components: {
    customul,
    btn
  },
  data () {
    return {
      datas: [
        { id: 'btnproperty',
          val: '属性',
          color: 'danger',
          uldatas: [
            { id: 1, text: '雷' },
            { id: 2, text: '冰' },
            { id: 3, text: '火' },
            { id: 4, text: '毒' },
            { id: 5, text: '龙' },
            { id: 6, text: '水' }
          ] },
        { id: 'btnmeat',
          val: '肉质',
          color: 'danger',
          uldatas: [
            { id: 1, text: '头' },
            { id: 2, text: '尾巴' },
            { id: 3, text: '前爪' },
            { id: 4, text: '后脚' },
            { id: 5, text: '背部' },
            { id: 6, text: '腹部' }
          ] },
        { id: 'btnpull',
          val: '异常',
          color: 'danger',
          uldatas: [
            { id: 1, text: '麻痹' },
            { id: 2, text: '眩晕' },
            { id: 3, text: '灼烧' },
            { id: 4, text: '冰块' },
            { id: 5, text: '气绝' },
            { id: 6, text: '负水' }
          ] }
      ]
    }
  }
}
</script>

<style lang="scss">
  #monster{
    margin-left: 10px;
    text-align: left;
  }
  .list>button:first-child{
    float: left;
    margin-right: 1px;
  }
/*  .list:nth-child(1){
    float: left;
  }*/
</style>
