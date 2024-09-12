"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    handleClick() {
      console.log("按钮被点击！");
    },
    handleHistoryPictureClick() {
      common_vendor.index.navigateTo({
        url: "../historyPicture/historyPicture"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_assets._imports_3,
    e: common_assets._imports_4,
    f: common_assets._imports_5,
    g: common_assets._imports_6,
    h: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    i: common_assets._imports_7,
    j: common_vendor.o((...args) => $options.handleHistoryPictureClick && $options.handleHistoryPictureClick(...args)),
    k: common_assets._imports_1$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
