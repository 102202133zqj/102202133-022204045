Page({
  data: {
      projects: [
          {
              id: 1,
              title: '智能化集成化的机器学习云平台',
              description: '这是一个用户参加的项目。',
              isAdmin: false
          },
          {
              id: 2,
              title: '智慧家庭人机交互平台关键技术及应用',
              description: '这是另一个用户参加的项目。',
              isAdmin: false
          },
          {
              id: 3,
              title: '智慧工地建设管理系统',
              description: '这是一个用户管理的项目。',
              isAdmin: true
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
  }
});