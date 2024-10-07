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
      history: 0,
      icons: ["../../static/head/head1.jpg", "../../static/head/head2.jpg", "../../static/head/head3.jpg", "../../static/head/head4.jpg", "../../static/head/head5.jpg", "../../static/head/head6.jpg", "../../static/head/head7.jpg", "../../static/head/head8.jpg", "../../static/head/head9.jpg"],
      selectedIcon: "../../static/head/head1.jpg",
      currentIcon: 0,
      showPopup: false
    };
  },
  onLoad() {
    const store = store_store.useCounterStore();
    const userId = store.id;
    this.selectedIcon = this.icons[this.store.headImg];
    common_vendor.index.request({
      url: `https://127.0.0.1:5000/user/historyPlan/${userId}`,
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
      url: `https://127.0.0.1:5000/user/historyPicture/${userId}`,
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
      url: `https://127.0.0.1:5000/user/history/${userId}`,
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
    },
    changeIcon() {
      console.log("头像被点击");
      this.showPopup = true;
    },
    switchIcon() {
      this.currentIcon = (this.currentIcon + 1) % this.icons.length;
    },
    confirmIcon() {
      this.selectedIcon = this.icons[this.currentIcon];
      this.store.headImg = this.currentIcon;
      this.showPopup = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.selectedIcon,
    b: common_vendor.o((...args) => $options.changeIcon && $options.changeIcon(...args)),
    c: common_vendor.t($data.store.username),
    d: common_vendor.o((...args) => $options.login && $options.login(...args)),
    e: common_assets._imports_0$1,
    f: $data.showPopup
  }, $data.showPopup ? {
    g: $data.icons[$data.currentIcon],
    h: common_vendor.o((...args) => $options.switchIcon && $options.switchIcon(...args)),
    i: common_vendor.o((...args) => $options.confirmIcon && $options.confirmIcon(...args))
  } : {}, {
    j: common_vendor.o((...args) => $options.handleHistoryPlanClick && $options.handleHistoryPlanClick(...args)),
    k: common_vendor.o((...args) => $options.handleHistoryPictureClick && $options.handleHistoryPictureClick(...args)),
    l: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-44720e65"]]);
wx.createPage(MiniProgramPage);
