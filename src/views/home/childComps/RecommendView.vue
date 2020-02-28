<template>
  <div class="recommeds-view">
    <div v-for="item in recommendes" class="recommeds-item">
      <a :href="item.link">
        <img :src="item.image"></img>
        <div class="recommeds-text">{{item.title}}</div>

      </a>
    </div>
  </div>
</template>


<script>
	export default {
		name: 'RrecommendView',
		data() {
			return {msg: '初始代模板'}
		},
		props: {
			recommendes: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
  .recommeds-view {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 10px 0px 30px;
    border-bottom: 10px solid beige;
  }

  .recommeds-item {
    flex: 1;
  }

  .recommeds-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }

  /*.recommeds-text{*/
  /*  text-align: center;*/
  /*}*/
</style>
