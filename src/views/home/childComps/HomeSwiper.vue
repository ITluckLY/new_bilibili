<template>
  <div>
     <swiper>
      <swiper-item v-for ="item in banneres">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>


<script>

    import {Swiper,SwiperItem} from "components/common/swiper"

	export default {
		data() {
			return {msg: '初始代模板'}
		},
    props:{
			banneres:{
				type:Array,
        default(){
					return{
						return:[]
          }
        }
      }
    },
    components:{
			Swiper,
      SwiperItem
    },
    methods:{
			/* 监听点击图片的状态 */
			imageLoad(){
				console.log('imageLoad');
				this.$emit('swiperImageLoad')
			}
    }
	}
</script>

<style scoped>
  body {
    background-color: green;
  }
</style>
