Page({
  data: {
    searchQuery: '',
    recommendedProjects: [
      {
        id: 1,
        title: '推荐项目A',
        description: '这是一个推荐项目。',
      },
      {
        id: 2,
        title: '推荐项目B',
        description: '这是另一个推荐项目。',
      },
    ],
  },
  onSearchInput(e) {
    this.setData({
      searchQuery: e.detail.value,
    });
  },
  onSearch() {
    const query = this.data.searchQuery.toLowerCase();
    const filteredProjects = this.data.recommendedProjects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
    this.setData({
      recommendedProjects: filteredProjects,
    });
  },

  navigateToNewProject() {
    // 使用wx.navigateTo跳转到新页面
    wx.navigateTo({
      url: '/pages/newprojects/newprojects'
    });
  },

  navigateToProjectDetail(e) {
    const projectId = e.currentTarget.dataset.projectId;
    wx.navigateTo({
      url: `/pages/projectDetail/projectDetail?projectId=${projectId}`
    });
  }
});