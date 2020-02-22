<template>
  <div>
     <swiper>
      <swiper-item v-for ="item in banneres">
        <a :href="item.link">
          <img :src="item.image" alt="">
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
    }
	}
</script>

<style scoped>
  body {
    background-color: green;
  }
</style>
