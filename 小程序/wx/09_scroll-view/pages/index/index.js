Page({
    data: {
        loading: false,
        refreshing: false,
    },
    loadMore() {
        console.log('加载更多');
        this.setData({
            loading: true
        })
        setTimeout(() => {
            this.setData({
                loading: false
            })
        }, 2000);
    },
    refresh() {
        console.log('刷新页面');
        wx.showNavigationBarLoading();
        // wx.startPullDownRefresh();
        this.setData({
            refreshing: true
        })
        setTimeout(() => {
            wx.hideNavigationBarLoading()
            // wx.stopPullDownRefresh()
            this.setData({
                refreshing: false
            })
        }, 2000);
    }
});