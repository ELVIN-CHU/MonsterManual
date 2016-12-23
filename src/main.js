// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    btns: []
  }
})

$(function () {
  // alert('import jquery successly!')
  $('#test').click(function () {
    alert('test click')
  })
})
