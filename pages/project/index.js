Page({
  data: {
    joinedProjects: [
      {
        id: 1,
        title: '智能化集成化的机器学习云平台',
        description: '这是一个用户参加的项目。',
      },
      {
        id: 2,
        title: '智慧家庭人机交互平台关键技术及应用',
        description: '这是另一个用户参加的项目。',
      },
    ],
    managedProjects: [
      {
        id: 1,
        title: '项目C',
        description: '这是一个用户管理的项目。',
      },
      {
        id: 2,
        title: '项目D',
        description: '这是另一个用户管理的项目。',
      },
    ],
  },

  goToProjectDetail(e) {
      const projectId = e.currentTarget.dataset.projectId;
      wx.navigateTo({
          url: `/pages/inproject/inproject?projectId=${projectId}`
      });
  },

  goToPublishAnnouncement(e) {
      const projectId = e.currentTarget.dataset.projectId;
      wx.navigateTo({
          url: `/pages/announcement/announcement?projectId=${projectId}`
      });
  },

  goToReview(e) {
      const projectId = e.currentTarget.dataset.projectId;
      wx.navigateTo({
          url: `/pages/review/review?projectId=${projectId}`
      });

    joinedProjects: [
      {
        id: 1,
        title: '智能化集成化的机器学习云平台',
        description: '这是一个用户参加的项目。',
      },
      {
        id: 2,
        title: '智慧家庭人机交互平台关键技术及应用',
        description: '这是另一个用户参加的项目。',
      },
    ],
    managedProjects: [
      {
        id: 1,
        title: '项目C',
        description: '这是一个用户管理的项目。',
      },
      {
        id: 2,
        title: '项目D',
        description: '这是另一个用户管理的项目。',
      },
    ],
  },
  
  onClickProjectInfo(e) {
    const index = e.currentTarget.dataset.index;
    const projectList = this.data.projectList;
    const selectedItem = projectList[index];
    selectedItem.showItem = !selectedItem.showItem;
    this.setData({
      projectList,
    });
  },

  goToProjectDetail: function(e) {
    // 获取被点击的项目ID
    const projectId = e.currentTarget.dataset.projectId;
    // 跳转到新页面，并传递项目ID作为参数
    wx.navigateTo({
      url: '/pages/joinedprojects/joinedprojects?projectId=' + projectId
    });

  }
});