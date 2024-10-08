// projectDetail.js
Page({
  data: {
    project: {}
  },
  onLoad: function(options) {
    const projectId = options.projectId;
    // 根据projectId获取项目详情，这里仅为示例
    // 实际应用中，你可能需要从服务器获取数据
    const projects = [
      {
        id: 1,
        title: '推荐项目A',
        description: '这是一个推荐项目。'
      },
      {
        id: 2,
        title: '推荐项目B',
        description: '这是另一个推荐项目。'
      },
      {
        id: 3,
        title: '推荐项目C',
        description: '这是第三个推荐项目。'
      }
    ];
    const project = projects.find(p => p.id == projectId);
    if (project) {
      this.setData({
        project
      });
    } else {
      wx.showToast({
        title: '项目未找到',
        icon: 'none'
      });
    }
  },
  applyForProject: function() {
    wx.showToast({
      title: '已申请',
      icon: 'success'
    });
    // 这里可以添加报名逻辑，例如发送请求到服务器
  }
});