"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const _sfc_main = {
  data() {
    return {
      store: store_store.useCounterStore(),
      username: "",
      password: ""
    };
  },
  methods: {
    register() {
      console.log("注册尝试", this.username, this.password);
      common_vendor.index.request({
        url: "https://127.0.0.1:5000/api/register",
        method: "POST",
        data: {
          user_name: this.username,
          password: this.password
        },
        success: (res) => {
          common_vendor.index.showToast({
            title: "注册成功",
            // 提示的文字
            icon: "success",
            // 成功图标，微信自带的✔
            duration: 2e3
            // 显示时长，单位毫秒
          });
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "注册失败",
            // 提示的文字
            icon: "fail",
            // 成功图标，微信自带的✔
            duration: 2e3
            // 显示时长，单位毫秒
          });
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
    e: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
