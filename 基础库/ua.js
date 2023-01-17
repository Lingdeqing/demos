/**
 * @param uaText
 * @constructor
 */
export const UATest = (uaText) => {
    // 操作系统
    const android = /Android/.test(uaText);
    const iOS = /(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/.test(uaText);
    const pc = !android && !iOS;

    // App
    const weixin = /MicroMessenger/i.test(uaText);
    const uc = /UCBrowser/.test(uaText);
    const QQ = /QQ\//.test(uaText);
    const QQBrowserCore = /MQQBrowser\//.test(uaText);
    const QQBrowser = QQBrowserCore && !weixin;
    const miuiBrowser = /XiaoMi\/MiuiBrowser\/([\d\.]+)(-Beta)?$/i.test(uaText);
    const chrome = (() => {
        if (QQ || uc || miuiBrowser) {
            return false;
        }
        return /(Chrome\/([\d.]+))|(CriOS\/([\d.]+))/i.test(uaText);
    })();
    const safari = /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i.test(uaText);

    // 小程序
    const ttminiprogram = /(?:toutiaomicroapp)|(?:ToutiaoMicroApp)|(?:toutiaodevtools)|(?:tt_micro_devtools)/.test(
        uaText,
    );
    // 直接判断 是否在支付宝内
    const alipayminiprogram = uaText.indexOf('AlipayClient') > -1;
    // const alipayminiprogram = typeof my !== undefined && my !== null && typeof my.alert !== undefined

    const ret = {
        // 操作系统
        android,
        iOS,
        pc,
        mobile: !pc,

        // 应用
        weixin, // 微信
        QQ, // QQ
        QQBrowser, // QQ浏览器
        QQBrowserCore, // QQ浏览器内核
        uc, // uc浏览器
        miuiBrowser, // miui浏览器
        chrome, // chrome浏览器
        safari, // safari

        // 小程序
        ttminiprogram,
        alipayminiprogram,
        get wxminiprogram() {
            // 微信小程序
            const wxUAText = navigator.userAgent;
            return (
                window.__wxjs_environment === 'miniprogram' ||
                /^wechatdevtools/.test(wxUAText) ||
                (wxUAText.match(/MicroMessenger/i) &&
                    wxUAText.match(/miniProgram/i))
            );
        },
        get baiduminiprogram() {
            // TODO
            return false;
        },
        get miniprogram() {
            return (
                ret.wxminiprogram ||
                ret.ttminiprogram ||
                ret.alipayminiprogram ||
                ret.baiduminiprogram
            );
        },
    };

    return ret;
};

/**
 * 根据user-Agent parse出的一个object，具体内容可以直接打开看看
 * @kind 常量
 */
export const ua = UATest(window.navigator.userAgent);
