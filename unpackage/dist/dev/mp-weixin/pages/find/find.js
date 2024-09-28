"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const _sfc_main = {
  data() {
    return {
      store: store_store.useCounterStore(),
      username: "",
      password: "",
      passwordComfirm: ""
    };
  },
  methods: {
    update() {
      if (this.password != this.passwordComfirm) {
        common_vendor.index.showToast({
          title: "两次输入的密码不一致",
          // 显示错误提示
          icon: "none",
          duration: 2e3
        });
        return;
      }
      common_vendor.index.request({
        url: "",
        // 替换为你的后端接口地址
        method: "POST",
        // 或 'PUT' 根据你的后端 API
        data: {
          user_name: this.username,
          password: this.password
          // 发送更新的密码
        },
        success: (res) => {
          if (res.data.data.ifSuccess === true) {
            common_vendor.index.showToast({
              title: "密码更新成功",
              icon: "success",
              duration: 2e3
            });
          } else {
            common_vendor.index.showToast({
              title: "密码更新失败",
              icon: "none",
              duration: 2e3
            });
          }
        },
        fail: (error) => {
          common_vendor.index.showToast({
            title: "请求失败，请稍后再试",
            icon: "none",
            duration: 2e3
          });
          console.error(error);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: $data.passwordComfirm,
    f: common_vendor.o(($event) => $data.passwordComfirm = $event.detail.value),
    g: common_vendor.o((...args) => $options.update && $options.update(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
