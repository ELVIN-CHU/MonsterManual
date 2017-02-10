<template>
  <div id="app" class="container">
    <customnav style="display:none"/>
    <br/>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
    <br/>
  </div>
</template>

<script>
import index from './components/index'
import monster from './components/monster'
import btn from './components/btn'
import customnav from './components/customnav'
import $ from 'jquery'

export default {
  name: 'app',
  components: {
    monster,
    index,
    customnav,
    btn
  },
  data () {
    return {
      view: 'index'
    }
  },
  // Todos
  // ...
  created: function () {
    this.$root.eventHub.$on('btnclick', this.btnclick)
  },
  // 最好在组件销毁前
  // 清除事件监听
  beforeDestroy: function () {
    this.$root.eventHub.$off('btnclick', this.btnclick)
  },
  methods: {
    btnclick: function (btnid) {
      if (btnid === 'btn1') {
        this.view = 'monster'
        $('#home').show()
        $('#nav').show()
      }
      if (btnid === 'home') {
        this.view = 'index'
        $('#home').hide()
        $('#nav').hide()
      }
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

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-active {
    opacity: 0;
  }

</style>
