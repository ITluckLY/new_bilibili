<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-d"></slot></div>
  <div v-else ><slot name="item-icon"></slot></div>

  <div :style="activeStyle"><slot name="item-title"></slot></div>
</div>
</template>

<script>
	export default {
		name: "TabBarItem",
    data(){
			return{
				//isActive:true,
      }
    },
    props:{
      path:String,
      activeColor:{
      	type:String,
        default:'cornflowerblue'
      }

    },
    computed:{ //计算属性
			isActive(){//是否激活状态
				// 定义高亮，点击某个组件时高亮。
				return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){ //样式属性
				return this.isActive ? {color:this.activeColor} : {}
      }

    },
    methods:{
			itemClick() {
				if(this.path !== this.$route.path)
					this.$router.push(this.path)
			}
    }

	}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
    margin-top: 3px;
    height: 24px;
    width: 24px;
    /*消除图片与字体之间的缝隙：*/
    vertical-align:middle;
  }
  .active{
    color:cornflowerblue;
  }
</style>
