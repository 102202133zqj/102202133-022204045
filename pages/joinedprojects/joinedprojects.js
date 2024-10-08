// joinedprojects.js
Page({
    data: {
        projectTitle: '', // 项目标题
        projectMembers: [] // 项目成员数组
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
    }
})