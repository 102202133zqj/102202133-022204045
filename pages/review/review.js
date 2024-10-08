// review.js
Page({
    data: {
        projectTitle: '',
        projectMembers: [],
        reviewContent: ''
    },
    onLoad: function(options) {
        const projectId = options.projectId;
        // 根据projectId获取项目详情，这里仅为示例
        // 实际应用中，你可能需要从服务器获取数据
        switch (projectId) {
            case '1':
                this.setData({
                    projectTitle: '智能化集成化的机器学习云平台',
                    projectMembers: ['李四', '王五', '赵六']
                });
                break;
            case '2':
                this.setData({
                    projectTitle: '智慧家庭人机交互平台关键技术及应用',
                    projectMembers: ['成员A', '成员B', '成员C']
                });
                break;
            // 其他项目处理
        }
    },
    onReviewInput: function(e) {
        this.setData({
            reviewContent: e.detail.value
        });
    },
    submitReview: function() {
        const { reviewContent } = this.data;
        if (!reviewContent) {
            wx.showToast({
                title: '审核意见不能为空',
                icon: 'none'
            });
            return;
        }
        // 这里可以添加提交审核的逻辑，例如发送请求到服务器
        wx.showToast({
            title: '审核提交成功',
            icon: 'success'
        });
        // 提交成功后返回上一页
        wx.navigateBack();
    }
});