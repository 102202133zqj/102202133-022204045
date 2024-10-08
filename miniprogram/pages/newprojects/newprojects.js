// newprojects.js
Page({
    data: {
      projectName: '',
      projectDescription: '',
      projectSkillRequirements: '',
      contactInfo: '',
    },
    // 更新输入框数据的函数
    updateInputValue(e) {
      const { field } = e.currentTarget.dataset;
      this.setData({
        [field]: e.detail.value
      });
    },
    // 发布项目的函数
    publishProject() {
      // 这里可以添加实际的发布逻辑，例如调用API等
      wx.showToast({
        title: '发布完成',
        icon: 'success',
        duration: 2000,
        success: () => {
          // 发布成功后返回主界面
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      });
    }
  });