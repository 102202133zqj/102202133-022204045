Page({
    data: {
        projectTitle: '', // 项目标题
        projectMembers: [], // 项目成员数组
        reviewLink: '', // 审核页面链接
        isAdmin: false, // 是否为管理员
        announcement: {} // 公告内容
    },
    onLoad: function(options) {
        // 页面加载时执行，获取传递的projectId
        const projectId = options.projectId;
        // 根据projectId获取项目详情，这里仅为示例
        // 实际应用中，你可能需要从服务器获取数据
        switch (projectId) {
            case '1':
                this.setData({
                    projectTitle: '智能化集成化的机器学习云平台',
                    projectMembers: ['李四', '王五', '赵六'],
                    reviewLink: '/pages/review/review?projectId=1', // 审核页面链接
                    isAdmin: false
                });
                break;
            case '2':
                this.setData({
                    projectTitle: '智慧家庭人机交互平台关键技术及应用',
                    projectMembers: ['成员A', '成员B', '成员C'],
                    reviewLink: '/pages/review/review?projectId=2', // 审核页面链接
                    isAdmin: false
                });
                break;
            case '3':
                this.setData({
                    projectTitle: '项目C',
                    projectMembers: ['成员X', '成员Y', '成员Z'],
                    reviewLink: '/pages/review/review?projectId=3', // 审核页面链接
                    isAdmin: true // 示例：项目3的用户为管理员
                });
                break;
            // 其他项目处理
        }
        // 加载公告内容
        const announcement = wx.getStorageSync('announcement') || {};
        this.setData({
            announcement
        });
    },
    goToReview: function() {
        // 跳转到审核页面
        wx.navigateTo({
            url: this.data.reviewLink
        });
    },
    goToPublishAnnouncement: function() {
        wx.navigateTo({
            url: `/pages/announcement/announcement?projectId=${this.data.projectId}`
        });
    }
});