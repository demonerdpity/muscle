"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const _sfc_main = {
  data() {
    const store = store_store.useCounterStore();
    return {
      store,
      historyPlan: [],
      // 伪造的历史计划数据
      plans: [
        { date: "2024-09-10", summary: "有氧训练", details: "训练计划详情 1：增肌4周，主要集中于力量训练" },
        { date: "2024-09-09", summary: "力量训练", details: "训练计划详情 2：减脂8周，加入有氧运动" },
        { date: "2024-09-08", summary: "核心训练", details: "训练计划详情 3：增肌12周，包含高强度间歇训练" },
        { date: "2024-09-07", summary: "全身训练", details: "训练计划详情 4：减脂16周，饮食控制配合全身训练" },
        { date: "2024-09-06", summary: "力量提升", details: "训练计划详情 5：增肌20周，专注于肌肉围度增长" }
      ],
      selectedPlan: null
      // 存储当前选中的计划
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
          this.historyPlan = res.data.data.list;
          console.log(this.historyPlan);
        }
      },
      fail: () => {
        console.log("获取失败");
        this.historyPlan = [];
      }
    });
  },
  methods: {
    handleIconClick() {
      console.log("图标点击，返回或其它操作");
    },
    showPlanDetails(plan) {
      this.selectedPlan = plan;
    },
    closeCard() {
      this.selectedPlan = null;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.plans, (plan, index, i0) => {
      return {
        a: common_vendor.t(plan.date),
        b: common_vendor.t(plan.summary),
        c: common_vendor.o(($event) => $options.showPlanDetails(plan), index),
        d: index
      };
    }),
    b: $data.selectedPlan
  }, $data.selectedPlan ? {
    c: common_vendor.t($data.selectedPlan.details),
    d: common_vendor.o((...args) => $options.closeCard && $options.closeCard(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5c4095b9"]]);
wx.createPage(MiniProgramPage);
