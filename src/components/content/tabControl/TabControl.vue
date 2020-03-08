<template>
  <div class="tab-control">
<!--  1，  给默认的第一个位置绑定一个颜色和index。
      2，添加点击时间方法:将index 传过去，谁点谁颜色高亮
-->
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active : index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>


<script>
	export default {
		data() {
			return {currentIndex: 0}
		},
    methods:{
			itemClick(index){
				this.currentIndex =index
      }
    },
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 18px;
    height: 44px;
    line-height: 44px;
  }

  .tab-control-item {
    flex: 1;

  }

  .tab-control-item span{
    padding: 5px;
  }

  .active span {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
