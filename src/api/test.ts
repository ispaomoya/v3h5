import request from '/@/utils/request';

//
// 周奖励信息
export function get_week_info(data?: any) {
    return request({
        url: '/v1/user/get_week_info',
        method: 'post',
        data
    })
}