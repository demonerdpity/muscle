"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_store = require("./store/store.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/index/index.js";
  "./pages/owner/owner.js";
  "./pages/space/space.js";
  "./pages/search/search.js";
  "./pages/historyPlan/historyPlan.js";
  "./pages/myTarget/myTarget.js";
  "./pages/historyPicture/historyPicture.js";
  "./pages/pictureGeneration/pictureGeneration.js";
  "./pages/find/find.js";
  "./pages/register/register.js";
  "./pages/addInfo/addInfo.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    const store = store_store.useCounterStore();
    const id = common_vendor.index.getStorageSync("id");
    if (id) {
      store.id = id;
      console.log("Retrieved ID:", id);
    } else {
      console.log("No ID found");
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
  // methods: {
  //   async checkUserId(userId) {
  //     try {
  //       // 调用数据库接口，查询用户数据
  //       const response = await uni.request({
  //         url: '你的数据库接口URL',  // 替换为实际接口
  //         method: 'POST',
  //         data: { userId }
  //       });
  //       // 假设 response.data 是返回的查询结果
  //       if (response.data符合条件) {
  //         // 如果符合条件，跳转到首页
  //         uni.switchTab({
  //           url: '/pages/index/index'  // 首页路径
  //         });
  //       } else {
  //         // 不符合条件，跳转到登录页
  //         uni.redirectTo({
  //           url: '/pages/login/login'  // 登录页路径
  //         });
  //       }
  //     } catch (error) {
  //       // 处理错误并跳转到登录页
  //       console.error('查询失败', error);
  //       uni.redirectTo({
  //         url: '/pages/login/login'  // 登录页路径
  //       });
  //     }
  //   }
  // }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
