const win:any = window
// ios 专用
function setupWebViewJavascriptBridge (callback:any) {
    if (win.WebViewJavascriptBridge) {
        return callback(win.WebViewJavascriptBridge)
    }
    if (win.WVJBCallbacks) {
        return win.WVJBCallbacks.push(callback)
    }
    win.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}

export default {
    // 调用客户端方法
    callhandler(name:any, data:any, callback:any) {
        setupWebViewJavascriptBridge(function (bridge:any) {
            bridge.callHandler(name, data, callback)
        })
    },
    // 客户端调用js方法
    registerhandler(name:any, callback:any) {
        setupWebViewJavascriptBridge(function (bridge:any) {
            bridge.registerHandler(name, function (data:any, responseCallback:any) {
                callback(data, responseCallback)
            })
        })
    }
}