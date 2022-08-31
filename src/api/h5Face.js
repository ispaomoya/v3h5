import request from '@/utils/request'

// 向服务端发送身份证，上传身份证
export function rep_bd_face_auth_res(data) {
    return request({
        url: '/v1/user/rep_bd_face_auth_res',
        method: 'post',
        data
    })
}

// 获取token access_token
export function get_face_auth_bd_option(data) {
    return request({
        url: '/v1/user/get_face_auth_bd_option',
        method: 'post',
        data
    })
}

// 获取token verify_token
export function baid_h5_verifytoken(data) {
    return request({
        url: '/v1/user/baid_h5_verifytoken',
        method: 'post',
        data
    })
}

// 获取身份证
export function baid_h5_result(data) {
    return request({
        url: '/v1/user/baid_h5_result',
        method: 'post',
        data
    })
}

