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
                    projectMembers: ['李四(微信号:D1111111)', '王五 (微信号:D22222222)', '赵六(微信号:D33333333)'],
                    reviewLink: '/pages/review/review?projectId=1', // 审核页面链接
                    isAdmin: false
                });
                break;
            case '2':
                this.setData({
                    projectTitle: '智慧家庭人机交互平台关键技术及应用',
                    projectMembers: ['成员A(微信号:D44444444)', '成员B(微信号:D55555555)', '成员C(微信号:D66666666)'],
                    reviewLink: '/pages/review/review?projectId=2', // 审核页面链接
                    isAdmin: false
                });
                break;
            case '3':
                this.setData({
                    projectTitle: '项目C',
                    projectMembers: ['成员X(微信号:D77777777)', '成员Y(微信号:D88888888)', '成员Z(微信号:D99999999)'],
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