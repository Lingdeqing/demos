//获取应用实例
const app = getApp()

Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isAuth: false,
        userInfo: ''
    },

    onLoad: function() {
        // 查看是否授权
        wx.getSetting({
            success: (res) => {
                if (res.authSetting['scope.userInfo']) {
                    console.log(res)
                    // 用户授权成功
                    this.setData({
                        isAuth: true,

                    });

                    // 获取用户信息
                    wx.getUserInfo({
                        success: (res)=>{
                            this.setData({
                                userInfo: JSON.stringify(res.userInfo)
                            })
                        }
                    })
                    
                    // 调用微信的 wx.login 接口，从而获取code
                    // wx.login({
                    //     success: res => {
                    //         // 获取到用户的 code 之后：res.code
                    //         console.log("用户的code:" + res.code);
                    //         // 可以传给后台，再经过解析获取用户的 openid
                    //         // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                    //         // wx.request({
                    //         //     // 自行补上自己的 APPID 和 SECRET
                    //         //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                    //         //     success: res => {
                    //         //         // 获取到用户的 openid
                    //         //         console.log("用户的openid:" + res.data.openid);
                    //         //     }
                    //         // });
                    //     }
                    // });
                } else {
                    // 用户没有授权
                    this.setData({
                        isAuth: false
                    });
                }
            }
        });
    },

    bindGetUserInfo: function(e) {
        if (e.detail.userInfo) { //用户按了允许授权按钮
            console.log("用户的信息如下：");
            console.log(e.detail.userInfo);
            this.setData({
                isAuth: true,
                userInfo: JSON.stringify(e.detail.userInfo)
            });
        } else { //用户按了拒绝按钮
            console.warn('用户点击了拒绝授权')
            // wx.showModal({
            //     title: '警告',
            //     content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
            //     showCancel: false,
            //     confirmText: '返回授权',
            //     success: function(res) {
            //         if (res.confirm) {
            //             console.log('用户点击了“返回授权”');
            //         }
            //     }
            // });
        }
    }
})