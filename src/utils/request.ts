import axios from 'axios';
import { Session } from '/@/utils/storage'
import {Toast} from "vant";

// 配置新建一个 axios 实例
const service = axios.create({
    // baseURL: import.meta.env.VITE_API_URL as any,
    timeout: 50000,
    headers: { 'Content-Type': 'application/json' },
})

// 添加请求拦截器
service.interceptors.request.use(
    (config: any) => {
        // 在发送请求之前做些什么 token
        // if (Session.get('token')) {
        //     (<any>config.headers).common['Authorization'] = `Bearer ${Session.get('token')}`;
        // }
        const win:any = window
        let test_token = '7f0770dc26f9bd23598fa140f354518eb72aac952ced0b51bf1255af1b040931'
        let im_token = win.appToken
        if (!im_token || im_token === '') {
            im_token = test_token
        }
        let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        let platform = isiOS ? "ios" : "android"
        config.headers['im-skin'] = win.imSkin ? win.imSkin : ""
        // config.headers['im-skin'] = 1013
        config.headers['im-platform'] = platform
        config.headers['im-token'] = im_token // 让每个请求携带自定义token 请根据实际情况自行修改
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        const res = response.data;
        const code = response.data.code
        if (code === 401) {
            // ElMessageBox.alert('登录状态已过期，请重新登录', '提示', {confirmButtonText:'确定'})
            //     .then(() => {
            //         Session.clear(); // 清除浏览器全部临时缓存
            //         window.location.href = '/'; // 去登录页
            //     })
            //     .catch(() => {});
        } else if (code !== 200) {
            // ElMessage.error(res.message)
            return Promise.reject(new Error(res.message))
        } else {
            return res
        }
    },
    (error) => {
        // 对响应错误做点什么
        if (error.message.indexOf('timeout') != -1) {
            Toast.fail('网络超时');
        } else if (error.message == 'Network Error') {
            Toast.fail('网络连接错误');
        } else {
            if (error.response.data) Toast.fail(error.response.statusText);
            else Toast.fail('接口路径找不到');
        }
        return Promise.reject(error);
    }
)

// 导出 axios 实例
export default service