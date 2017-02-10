// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    // 将在各处使用该事件中心
    // 组件通过它来通信
    eventHub: new Vue()
  }
})
