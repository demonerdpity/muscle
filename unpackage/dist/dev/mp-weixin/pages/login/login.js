"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const _sfc_main = {
  data() {
    store_store.useCounterStore();
    return {
      store: store_store.useCounterStore(),
      username: "",
      password: ""
    };
  },
  onLoad() {
    store_store.useCounterStore();
  },
  methods: {
    login() {
      console.log("登录尝试", this.username, this.password);
      common_vendor.index.switchTab({
        url: "../index/index"
      });
      common_vendor.index.request({
        url: "https://apifoxmock.com/m1/5119278-4782393-default/api/login",
        method: "POST",
        data: {
          user_name: this.username,
          password: this.password
        },
        success: (res2) => {
          console.log("登录成功");
          console.log(res2.data.data.id);
          console.log(this.username);
          this.store.id = res2.data.data.id;
          this.store.username = this.username;
          common_vendor.index.setStorageSync("id", this.store.id);
          common_vendor.index.switchTab({
            url: "../index/index"
          });
        },
        fail: (err) => {
          this.store.id = res.data.data.id;
          this.store.username = this.username;
          common_vendor.index.switchTab({
            url: "../index/index"
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
    e: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
