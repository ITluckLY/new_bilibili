<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <Home-Swiper :banneres="banners"></Home-Swiper>

    <Recommend-view :recommendes="recommende"></Recommend-view>
    <Featuer-View></Featuer-View>
    <TabControl class="tab-control" :titles="['流行','新款','精选']"></TabControl>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
       <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
       <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
       <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
       <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
       <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
       <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>   <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>
    <ul>
      <li>列表</li>
    </ul>








  </div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import {getHomeData} from "network/home";
	import HomeSwiper from "./childComps/HomeSwiper";
	import RecommendView from "./childComps/RecommendView";

	import FeatuerView from "./childComps/FeatuerView";
	import TabControl from "components/content/tabControl/TabControl";

	export default {
		name: "Home",
		data() {
			return {
				count: 'hello',
				result: '',
				banners: [],
				recommende: []
			}
		},
		components: {
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatuerView,
			TabControl
		},
		// computed: { //计算属性
		// 	count() {
		// 		// return this.$store.state.counter
		// 	}
		// },
		methods: {
			add() {
				//将值传递至 store中的increment 方法
				// this.$store.commit('increment')
			},
			lower() {
				// this.$store.commit('decrement')
			}
		},
		created() {
			getHomeData().then(res => {

				this.result = res;
				this.banners = res.data.banner.list;
				this.recommende = res.data.recommend.list;
				console.log(res);
			})

		}
	}
</script>

<style scoped>
  #home {
    padding-top: 44px;

    padding-bottom: 49px;
  }

  .home-bar {
    background-color: var(--color-tint);
    color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    z-index: 9; /* 层级关系*/
  }

  .tab-control {
  /*    吸顶滑动 position 属性 必须配合top属性  就tab 的高度*/
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>
