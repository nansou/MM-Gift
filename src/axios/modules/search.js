import request from '../request'
import qs from 'qs'
// 获取top10
export function getTopTen(data) {
    return request({
        url: 'index.php?r=Port/index&type=top100&appkey=1dd33ed212&v=2',
        method: 'get'
    })
}
// 获取top10
export function getDetail(data) {
    return request({
        url: `?r=Port/index&appkey=1dd33ed212&v=2&id=${data}`,
        method: 'get'
    })
}
export function convertUrl(id) {
    
}