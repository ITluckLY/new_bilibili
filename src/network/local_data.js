/**
 *
 * @author 洋哥
 * @create 2020-04-05 23:09
 **/
import {requestLocal} from "network/requestLocal";
export  function getLocalData() {
  return requestLocal({
    url:'/api/getimages/0'
  })
}

