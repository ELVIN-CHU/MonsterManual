<template>
  <div id="nav" class="bs-example">
    <ul class="nav nav-pills">
      <li><btn style="display:none" :id='home.id' :text="home.val" :color="home.color" :size='home.size'/></li>
      <li ><a href="#">Help</a></li>
      <dropdownMenu/>
    </ul>
  </div>
</template>

<script>
import dropdownMenu from './dropdownMenu'
import btn from './btn'
export default {
  name: 'customnav',
  components: {
    dropdownMenu,
    btn
  },
  data () {
    return {
      home: { id: 'home', val: '首页', color: 'danger', size: 'lg' }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
