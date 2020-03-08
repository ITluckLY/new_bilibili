<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>

</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
		props: {
			probeType: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				msg: '初始代模板',
				scroll: ''
			}
		},
		mounted() {
			/* 1，创建Bscroll 对象*/
			this.scroll = new BScroll(this.$refs.wrapper, {
				// 点击属性
				click: true,
				//侦测状态
				//默认情况下BScoll是不可以实时监听滚动位置
				//probe 侦测
				// 0,1 是不侦测
				// 2 是侦测状态，
				// 3 惯性侦测
				probeType: this.probeType,
				// 加载更多状态
				pullUpLoad: true,

			})
			/* 2 ，点击位置，监听滚动的位置 */
			this.scroll.on('scroll', (position) => {
				//console.log(position);
				this.$emit('scroll', position)
			})

			/* 3 ，加载更多。*/
			this.scroll.on('pullingUp', () => {
				console.log('加载更多！！！')
				// 等数据请求完成，并且将行动数据展示出来后
				setTimeout(() => {
					this.scroll.finishPullUp()
				}, 100)
			})
		},
		methods: {
			scrollTo(x, y, time) {
				this.scroll.scrollTo(x, y, time)
			}
		}

	}
</script>

<style scoped>
  .wrapper {
    /*height: 200px;*/
    /*background-color: red;*/
    /*overflow: hidden;*/
    /*font-weight: normal;*/

  }

</style>
