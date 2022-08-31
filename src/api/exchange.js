import request from '@/utils/request'

// 周奖励信息
export function get_week_info(data) {
    return request({
        url: '/v1/user/get_week_info',
        method: 'post',
        data
    })
}

export function get_weekaward_config(data = {}) {
    return request({
        url: '/v1/user/get_weekaward_config',
        method: 'post',
        data
    })
}

// 奖励明细
export function diamond_log(data = {}) {
    return request({
        url: '/v1/user/diamond_log',
        method: 'post',
        data
    })
}