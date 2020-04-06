<!-- 列表详情页 -->

<template>
  <div>
  <div class="goods-item">
      <img :src="goodItem.img_url">
      <div class="info">
        <h1 class="info-title">{{goodItem.title}}</h1>
        <div class="info-body">{{goodItem.zhaiyao}}</div>
      </div>
  </div>
</div>
</template>

<script>
	export default {
		name: "GoodsListItem",
		data() {
			return {msg: '初始代模板'}
		},
    props:{
			goodItem:{
				type:Object,
        default(){
					return {}
        }
      }
    }
	}
</script>

<style scoped>

  /* 子绝父相 */
  .goods-item{
    padding-bottom: 10px;
	  position: relative; /* 相对位置*/
    width: 100%;
  }
  img {
    width: 100%;
    margin: auto;
    border-radius: 5px;/* 圆角设置 */
 }

   .info {
    color: white;
    text-align: left;
    position: absolute; /* 绝对定位 将文字设置在图片上*/
    bottom: 13px; /* 将文字放在图片底部*/
    background-color: rgba(0,0,0,0.4);
     overflow: hidden;/*超出部分 隐藏 */
  }
   .info-title {
    font-size: 16px;
  }
  .info-body {
    font-size: 14px;
  }
</style>
