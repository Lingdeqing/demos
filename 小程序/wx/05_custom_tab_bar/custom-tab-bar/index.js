Component({
    data: {
        selected: 0,
        list: [
            {
                "pagePath": "/pages/index/index",
                "text": "首页",
                "iconPath": "/images/index.png",
                "selectedIconPath": "/images/index.png"
            },
            {
                "pagePath": "/pages/logs/logs",
                "text": "日记",
                "iconPath": "/images/log.png",
                "selectedIconPath": "/images/log.png"
            }
        ]
    },
    methods: {
        switch(e){
            const {index, path} = e.currentTarget.dataset;
            wx.switchTab({
                url: path
            });
            this.setData({
                selected: index
            });
        }
    }
})