const { envList } = require('../../envList');

// pages/me/index.js
Page({
  data: {
    userInfo: {
      name: '张三',
      studentId: '123456',
      major: '计算机科学与技术',
      contact: '1234567890',
      resume: '这是个人简历。',
    },
  },

  formSubmit(e) {
    const updatedUserInfo = e.detail.value;
    this.setData({
      userInfo: updatedUserInfo,
    });
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000,
    });
  },
});
