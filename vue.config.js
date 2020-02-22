/**
 *
 * @author 洋哥
 * @create 2020-02-19 21:53
 **/

module.exports ={
	configureWebpack:{
		resolve:{
			alias:{ //别名
				//'@':'src', 系统默认的
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views'
			}
		}
	}
}
