<template>
<div id="tab-main">
  <tab-bar>                   <!--activeColor:给子组件传递样式属性 -->
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-d"  src="~assets/img/tabar/homed.jpg" >
      <img slot="item-icon" src="~assets/img/tabar/home.png" >
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-d"  src="~assets/img/tabar/slotd.jpg" >
      <img slot="item-icon" src="~assets/img/tabar/slot.png" >
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-d"  src="~assets/img/tabar/cartwo.jpg" >
      <img slot="item-icon" src="~assets/img/tabar/car.png">
      <div slot="item-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-d"  src="~assets/img/tabar/mytwo.jpg" >
      <img slot="item-icon" src="~assets/img/tabar/my.png" >
      <div slot="item-title">我的</div>
    </tab-bar-item>

  </tab-bar>
</div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
	import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
		name: "MainTabBar",
    components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style scoped>

</style>
