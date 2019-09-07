const app = getApp();
const totalHeight = {
    'iPhone': 64,
    'iPhone X': 88,
    'Android': 68,
    'samsung': 72
};

Page({
    data: {
        sbh: 0,
        nh: 0
    },
    onLoad(){
        const res  = wx.getSystemInfoSync();
        let th = 64;
        if(res.model.indexOf('iPhone X') !== -1){
            th = totalHeight['iPhone X'];
        } else if(res.model.indexOf('Android') !== -1){
            th = totalHeight['Android'];
        } else if(res.model.indexOf('samsung') !== -1){
            th = totalHeight['samsung'];
        }
        this.setData({
            sbh: res.statusBarHeight,
            nh: th - res.statusBarHeight
        })
    }
})
