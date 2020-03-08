<template>
  <div id="home">

    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <BScroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <Home-Swiper :banneres="banners"></Home-Swiper>

      <Recommend-view :recommendes="recommende"></Recommend-view>
      <Featuer-View></Featuer-View>
      <TabControl class="tab-control" :titles="['流行','新款','精选']"></TabControl>

      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li>列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
        <li>列表51</li>
        <li>列表52</li>
        <li>列表53</li>
        <li>列表54</li>
        <li>列表55</li>
        <li>列表56</li>
        <li>列表57</li>
        <li>列表58</li>
        <li>列表59</li>
        <li>列表60</li>
        <li>列表61</li>
        <li>列表62</li>
        <li>列表63</li>
        <li>列表64</li>
        <li>列表65</li>
        <li>列表66</li>
        <li>列表67</li>
        <li>列表68</li>
        <li>列表69</li>
        <li>列表70</li>
        <li>列表71</li>
        <li>列表72</li>
        <li>列表73</li>
        <li>列表74</li>
        <li>列表75</li>
        <li>列表76</li>
        <li>列表77</li>
        <li>列表78</li>
        <li>列表79</li>
        <li>列表80</li>
        <li>列表81</li>
        <li>列表82</li>
        <li>列表83</li>
        <li>列表84</li>
        <li>列表85</li>
        <li>列表86</li>
        <li>列表87</li>
        <li>列表88</li>
        <li>列表89</li>
        <li>列表90</li>
        <li>列表91</li>
        <li>列表92</li>
        <li>列表93</li>
        <li>列表94</li>
        <li>列表95</li>
        <li>列表96</li>
        <li>列表97</li>
        <li>列表98</li>
        <li>列表99</li>
        <li>列表100</li>
      </ul>
    </BScroll>
    <!-- .native -监听组件根元素的原生事件-->
    <back-top @click.native="backClick" v-show="showBackTop"></back-top>


  </div>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar";
	import {getHomeData} from "network/home";
	import HomeSwiper from "./childComps/HomeSwiper";
	import RecommendView from "./childComps/RecommendView";

	import FeatuerView from "./childComps/FeatuerView";
	import TabControl from "components/content/tabControl/TabControl";

	import BScroll from "components/common/scroll/Scroll"
	import BackTop from "components/content/backtop/BackTop";

	export default {
		name: "Home",
		data() {
			return {
				count: 'hello',
				result: '',
				banners: [],
				recommende: [],
        showBackTop:false
			}
		},
		components: {
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatuerView,
			TabControl,
			BScroll,
			BackTop
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
			},
      backClick(){
        console.log('backClick')
        /* 返回x，y 坐标值。第三个参数是 毫秒值*/
        // 方法一： 默认当前获取。
        // this.$refs.scroll.scroll.scrollTo(0,0,2000)

			  // 方法二：将方法定义在scroll 里。直接调用
         this.$refs.scroll.scrollTo(0,0,1000)

			},
      contentScroll(position){
				console.log(position);
				/* 当y值 小于 1000 的时候是默认隐藏的，大于1000的时候是展现的。值为true*/
				this.showBackTop= -position.y > 1000
			},

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
    height: 100vh;
    position: relative;
    /*padding-bottom: 49px;*/
    /* 获取当前窗口的视觉大小*/

  }

  .home-bar {
    background-color: var(--color-tint);
    color: #f6f6f6;

    /* 置顶不遮挡*/
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

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
