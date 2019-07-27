const app = getApp();
Page({
    data: {
        ready: false,
        role: '',
        selectedPage: 'index',
        list: [
            {
                "pageId": "index",
                "text": "首页",
                "title": "首页",
                "iconPath": "/images/index.png",
                "selectedIconPath": "/images/index.png"
            },

            {
                "pageId": "logs",
                "text": "日记",
                "title": "日记",
                "iconPath": "/images/log.png",
                "selectedIconPath": "/images/log.png"
            }
        ]
    },
    onLoad() {
        app.getUserInfo().then(({role}) => {
            if (role === 'admin') {
                this.setData({
                    list: [...this.data.list, {
                        "pageId": "admin",
                        "text": "管理员",
                        "title": "管理员",
                        "iconPath": "/images/admin.png",
                        "selectedIconPath": "/images/admin.png"
                    }]
                });
            }
            this.setData({
                role,
                ready: true
            })
        })
    },
    getPage(pageId) {
        return this.data.list.find(item => item.pageId === pageId);
    },
    switchTab(e) {
        const { pageId } = e.currentTarget.dataset;
        const { title } = this.getPage(pageId);
        this.setData({
            selectedPage: pageId
        });
        wx.setNavigationBarTitle({
            title
        })
    },
    setAdmin(){
        if(this.data.role === 'admin'){
            this.setData({
                role: 'user',
                list: this.data.list.slice(0, 2)
            })
        } else {
            this.setData({
                role: 'admin',
                list: [...this.data.list, {
                    "pageId": "admin",
                    "text": "管理员",
                    "title": "管理员",
                    "iconPath": "/images/admin.png",
                    "selectedIconPath": "/images/admin.png"
                }]
            })
        }
    },
})