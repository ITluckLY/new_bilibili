<template>

  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style scoped>
  #tab-bar{
    height: 49px;
    display: flex;
    background-color: #f6f6f6;

    /*    将标头放再下面*/
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    /*  添加阴影*/
    box-shadow: 0 -2px 1px rgba(100,100,100,0.1) ;

  }

</style>
