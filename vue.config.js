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
	},
  /*devServer: {
        proxy: {
            '/search': {
                target: 'http://www.acfun.cn',
                ws: true,//是否代理websockets
                changeOrigin: true   // 设置同源  默认false，是否需要改变原始主机头为目标URL
            }
        }
    }*/
}
