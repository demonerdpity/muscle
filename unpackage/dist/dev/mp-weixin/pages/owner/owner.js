"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const uniList = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
const uniListItem = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _sfc_main = {
  components: {
    uniList,
    uniListItem
  },
  data() {
    return {
      historyPlan: 0,
      historyPicture: 0,
      history: 0
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "https://apifoxmock.com/m1/5119278-4782393-default/user/historyPlan/1",
      method: "GET",
      success: (res) => {
        console.log("获取成功");
        if (res.data && res.data.data.count !== void 0) {
          this.historyPlan = res.data.data.count;
        }
      },
      fail: () => {
        console.log("获取失败");
        this.historyPlan = 0;
      }
    });
    common_vendor.index.request({
      url: "https://apifoxmock.com/m1/5119278-4782393-default/user/historyPicture/1",
      method: "GET",
      success: (res) => {
        if (res.data && res.data.data.count !== void 0) {
          this.historyPicture = res.data.data.count;
        }
      },
      fail: () => {
        this.historyPicture = 0;
      }
    });
    common_vendor.index.request({
      url: "https://apifoxmock.com/m1/5119278-4782393-default/user/history/1",
      method: "GET",
      success: (res) => {
        if (res.data && res.data.data.count !== void 0) {
          this.history = res.data.data.count;
        } else {
          this.history = 0;
        }
      },
      fail: () => {
        this.history = 0;
      }
    });
  },
  methods: {
    handleHistoryPlanClick() {
      common_vendor.index.navigateTo({
        url: "../historyPlan/historyPlan"
      });
    },
    handleHistoryTargetClick() {
      common_vendor.index.navigateTo({
        url: "../myTarget/myTarget"
      });
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
    b: common_assets._imports_1$1,
    c: common_vendor.t($data.historyPlan),
    d: common_vendor.o((...args) => $options.handleHistoryPlanClick && $options.handleHistoryPlanClick(...args)),
    e: common_vendor.t($data.historyPicture),
    f: common_vendor.o((...args) => $options.handleHistoryPictureClick && $options.handleHistoryPictureClick(...args)),
    g: common_vendor.o((...args) => $options.handleHistoryTargetClick && $options.handleHistoryTargetClick(...args)),
    h: common_vendor.t($data.history)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-44720e65"]]);
wx.createPage(MiniProgramPage);
