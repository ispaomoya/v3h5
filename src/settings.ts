import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)
const info:any = {
    cpTitle: "觅爱漂流瓶",
    cpEmail: "yilimi28@163.com",
    cpName: "一粒米（深圳）文化传播有限公司",
    cpUrl: "www.52miai.com",
    cpPhone: "13100777608",
    //cpQq: "2450924795",
    cpAddress: "深圳市福田区莲花街道福新社区益田路6013号江苏大厦A、B座A座7层A701-A26",
    cpPower: "觅爱",
    //协议签订地
    cpSigned: "广东省深圳市南山区",
}

Object.keys(info).forEach( (item: string) => {
    // 全局挂载
    app.config.globalProperties[item] = info[item]
})

export const title = info.cpTitle