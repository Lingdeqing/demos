Page({
    data: {
        message: 'initial data.'
    },
    onTap(){
        wx.request({
            url: 'http://localhost:23000/test/get/info',
            success: ({data}) => {
                this.setData({
                    message: JSON.stringify(data, null, 2)
                })
            },
            fail(){
                console.log('fail')
            }
        })
    }
});