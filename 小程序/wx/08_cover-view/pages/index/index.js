Page({
    data: {

        //在真机上将焦点给input
        inputFocus:false,
        //初始占位清空
        inputInfo: '点击输入'
    },
    /**
     * 将焦点给到 input（在真机上不能获取input焦点）
     */
    tapInput() {
        this.setData({
            //在真机上将焦点给input
            inputFocus:true,
        });
    },

    onInput(e){
        this.setData({
            inputInfo: e.detail.value
        })
    },

    /**
     * input 失去焦点后将 input 的输入内容给到cover-view
     */
    blurInput(e) {
        this.setData({
            inputInfo: e.detail.value || '点击输入'
        });
    }
});