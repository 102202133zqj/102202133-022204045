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
});