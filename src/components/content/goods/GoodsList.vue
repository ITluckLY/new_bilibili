<!-- 详情 -->
<template>
  <div class="goods">
    <!-- :goods-item :向子组件里传值。 -->
    <goods-list-item v-for="item in goods" :good-item="item"/>
  </div>

</template>

<script>
	import GoodsListItem from "./GoodsListItem";
  export default {
		name: "GoodsList",
		data() {
			return {msg: '初始代模板'}
		},
    components:{
			GoodsListItem
    },
		props: {
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
  .goods {
    display: flex; /* 共占一行 */
    flex-wrap: wrap; /* 可以根据图片大小排放图片 */
    justify-content:space-around ; /*在一行 均等分 内容 */
  }


</style>
