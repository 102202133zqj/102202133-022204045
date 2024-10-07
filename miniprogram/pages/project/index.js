// const app = getApp()
const { envList } = require('../../envList.js');
Page({
  data: {
    joinedProjects: [
      {
        id: 1,
        title: '项目A',
        description: '这是一个用户参加的项目。',
      },
      {
        id: 2,
        title: '项目B',
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
});