<template>
  <div id="app">
    <keep-alive> <!-- 此处添加keep-alive :目的就是为了防止 过度的销毁、创建。 -->
          <router-view></router-view>
    </keep-alive>

<!--    <nav-bar></nav-bar>-->
    <tabBar-views></tabBar-views>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  slot: 'App',
  components: {
  	'tabBar-views':MainTabBar,
  //  MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
