<template>
  <div id="app">
    <router-view></router-view>
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
