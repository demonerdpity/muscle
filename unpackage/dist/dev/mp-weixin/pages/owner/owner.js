"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const common_assets = require("../../common/assets.js");
const uniList = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
const uniListItem = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.js";
const _sfc_main = {
  components: {
    uniList,
    uniListItem
  },
  data() {
    const store = store_store.useCounterStore();
    return {
      store,
      historyPlan: 0,
      historyPicture: 0,
      history: 0
    };
  },
  onLoad() {
    const store = store_store.useCounterStore();
    const userId = store.id;
    common_vendor.index.request({
      url: `https://apifoxmock.com/m1/5119278-4782393-default/user/historyPlan/${userId}`,
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
      url: `https://apifoxmock.com/m1/5119278-4782393-default/user/historyPicture/${userId}`,
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
      url: `https://apifoxmock.com/m1/5119278-4782393-default/user/history/${userId}`,
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
    },
    handleAddInfo() {
      common_vendor.index.navigateTo({
        url: "../addInfo/addInfo"
      });
    },
    login() {
      common_vendor.index.navigateTo({
        url: "../login/login"
      });
    },
    logout() {
      common_vendor.index.navigateTo({
        url: "../login/login"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.store.username),
    c: common_vendor.o((...args) => $options.login && $options.login(...args)),
    d: common_assets._imports_1$1,
    e: common_vendor.o((...args) => $options.handleHistoryPlanClick && $options.handleHistoryPlanClick(...args)),
    f: common_vendor.o((...args) => $options.handleHistoryPictureClick && $options.handleHistoryPictureClick(...args)),
    g: common_vendor.o((...args) => $options.handleHistoryTargetClick && $options.handleHistoryTargetClick(...args)),
    h: common_vendor.o((...args) => $options.handleAddInfo && $options.handleAddInfo(...args)),
    i: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-44720e65"]]);
wx.createPage(MiniProgramPage);
