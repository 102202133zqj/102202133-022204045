// announcement.js
Page({
    data: {
        title: '',
        content: ''
    },
    onTitleInput: function(e) {
        this.setData({
            title: e.detail.value
        });
    },
    onContentInput: function(e) {
        this.setData({
            content: e.detail.value
        });
    },
    submitAnnouncement: function() {
        const { title, content } = this.data;
        if (!title || !content) {
            wx.showToast({
                title: '标题和内容不能为空',
                icon: 'none'
            });
            return;
        }
        const announcement = { title, content };
        const pages = getCurrentPages();
        const prevPage = pages[pages.length - 2]; // 上一个页面
        prevPage.setData({
            announcement
        });
        wx.showToast({
            title: '公告发布成功',
            icon: 'success'
        });
        // 发布成功后返回上一页
        wx.navigateBack();
    }
});