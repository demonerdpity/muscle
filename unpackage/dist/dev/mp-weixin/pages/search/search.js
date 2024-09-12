"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      height: "",
      weight: "",
      genderIndex: 0,
      goalIndex: 0,
      durationIndex: 0,
      targetWeight: "",
      genderOptions: ["男", "女"],
      goalOptions: ["减脂", "增肌"],
      durationOptions: ["4", "8", "12", "16", "20"]
    };
  },
  methods: {
    handleIconClick(e) {
      common_vendor.index.navigateTo({
        url: "../historyPlan/historyPlan"
      });
    },
    updateHeight(event) {
      this.height = event.detail.value;
    },
    updateWeight(event) {
      this.weight = event.detail.value;
    },
    onGenderChange(event) {
      this.genderIndex = event.detail.value;
    },
    onGoalChange(event) {
      this.goalIndex = event.detail.value;
    },
    onDurationChange(event) {
      this.durationIndex = event.detail.value;
    },
    updateTargetWeight(event) {
      this.targetWeight = event.detail.value;
    },
    search() {
      ({
        height: this.height,
        weight: this.weight,
        gender: this.genderOptions[this.genderIndex],
        goal: this.goalOptions[this.goalIndex],
        duration: this.durationOptions[this.durationIndex],
        targetWeight: this.targetWeight
      });
      const formattedText = `我要进行增肌，帮我合理安排一周的健身计划`;
      common_vendor.index.request({
        url: "https://apifoxmock.com/m1/5119278-4782393-default/api/aiPlan",
        method: "POST",
        data: {
          text: formattedText
          // 发送格式化后的文本
        },
        success: (res) => {
          console.log("AI 计划:", res.data);
        },
        fail: (err) => {
          console.error("请求失败:", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => $options.handleIconClick && $options.handleIconClick(...args)),
    c: $data.height,
    d: common_vendor.o((...args) => $options.updateHeight && $options.updateHeight(...args)),
    e: $data.weight,
    f: common_vendor.o((...args) => $options.updateWeight && $options.updateWeight(...args)),
    g: $data.targetWeight,
    h: common_vendor.o((...args) => $options.updateTargetWeight && $options.updateTargetWeight(...args)),
    i: common_vendor.t($data.genderOptions[$data.genderIndex]),
    j: $data.genderOptions,
    k: $data.genderIndex,
    l: common_vendor.o((...args) => $options.onGenderChange && $options.onGenderChange(...args)),
    m: common_vendor.t($data.goalOptions[$data.goalIndex]),
    n: $data.goalOptions,
    o: $data.goalIndex,
    p: common_vendor.o((...args) => $options.onGoalChange && $options.onGoalChange(...args)),
    q: common_vendor.t($data.durationOptions[$data.durationIndex]),
    r: $data.durationOptions,
    s: $data.durationIndex,
    t: common_vendor.o((...args) => $options.onDurationChange && $options.onDurationChange(...args)),
    v: common_vendor.o((...args) => $options.search && $options.search(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
