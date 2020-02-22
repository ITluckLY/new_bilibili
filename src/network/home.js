/**
 *
 * @author 洋哥
 * @create 2020-02-20 17:07
 **/
import {request} from "network/request";
export function getHomeData() {
	return request({
		url:'/home/multidata'
	})
}
