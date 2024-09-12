"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 伪造的历史计划数据
      plans: [
        { date: "2024-09-10", summary: "减重5公斤", details: "体重由80kg减少到75kg" },
        { date: "2024-09-09", summary: "体重不变增肌", details: "体重保持80kg不变，训练腹肌" },
        { date: "2024-09-08", summary: "减重10公斤", details: "体重由90kg减少到80kg" },
        { date: "2024-09-07", summary: "增肌5公斤", details: "体重从65kg增加到70kg，并增肌训练" },
        { date: "2024-09-06", summary: "增肌5公斤", details: "体重从70kg增加到75kg，并增肌训练" }
      ],
      selectedPlan: null
      // 存储当前选中的计划
    };
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ac9433ee"]]);
wx.createPage(MiniProgramPage);
