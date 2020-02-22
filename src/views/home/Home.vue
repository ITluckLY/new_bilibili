<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <Home-Swiper :banneres="banners"></Home-Swiper>

    <Recommend-view :recommendes="recommende"></Recommend-view>
  </div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import {getHomeData} from "network/home";
	import HomeSwiper from "./childComps/HomeSwiper";
	import RecommendView from "./childComps/RecommendView";

	export default {
		name: "Home",
		data() {
			return {
				count: 'hello',
				result: '',
				banners: [],
        recommende:[]
			}
		},
		components: {
			NavBar,
			HomeSwiper,
			RecommendView
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
			})

		}
	}
</script>

<style scoped>

  .home-bar {
    background-color: var(--color-tint);
    color: #f6f6f6;
  }
</style>
