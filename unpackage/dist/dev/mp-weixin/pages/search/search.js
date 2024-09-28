"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      heightOptions: Array.from({ length: 56 }, (v, k) => 145 + k),
      // 生成145到200的选项
      weightOptions: Array.from({ length: 96 }, (v, k) => 35 + k),
      // 生成35到130的选项
      targetWeightOptions: Array.from({ length: 96 }, (v, k) => 35 + k),
      // 生成35到130的选项
      heightIndex: 0,
      weightIndex: 0,
      targetWeightIndex: 0,
      height: "",
      weight: "",
      targetWeight: "",
      genderIndex: 0,
      goalIndex: 0,
      durationIndex: 0,
      genderOptions: ["男", "女"],
      goalOptions: ["减脂", "增肌"],
      durationOptions: ["4", "8", "12", "16", "20"],
      showAnswer: false
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
    onTargetWeightChange(event) {
      this.targetWeightIndex = event.detail.value;
      this.targetWeight = this.targetWeightOptions[this.targetWeightIndex];
    },
    onHeightChange(event) {
      this.heightIndex = event.detail.value;
      this.height = this.heightOptions[this.heightIndex];
    },
    onWeightChange(event) {
      this.weightIndex = event.detail.value;
      this.weight = this.weightOptions[this.weightIndex];
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
      this.showAnswer = true;
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
  return common_vendor.e({
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => $options.handleIconClick && $options.handleIconClick(...args)),
    c: $data.showAnswer
  }, $data.showAnswer ? {} : {}, {
    d: common_vendor.t($data.heightOptions[$data.heightIndex]),
    e: $data.heightOptions,
    f: $data.heightIndex,
    g: common_vendor.o((...args) => $options.onHeightChange && $options.onHeightChange(...args)),
    h: common_vendor.t($data.weightOptions[$data.weightIndex]),
    i: $data.weightOptions,
    j: $data.weightIndex,
    k: common_vendor.o((...args) => $options.onWeightChange && $options.onWeightChange(...args)),
    l: common_vendor.t($data.targetWeightOptions[$data.targetWeightIndex]),
    m: $data.targetWeightOptions,
    n: $data.targetWeightIndex,
    o: common_vendor.o((...args) => $options.onTargetWeightChange && $options.onTargetWeightChange(...args)),
    p: common_vendor.t($data.genderOptions[$data.genderIndex]),
    q: $data.genderOptions,
    r: $data.genderIndex,
    s: common_vendor.o((...args) => $options.onGenderChange && $options.onGenderChange(...args)),
    t: common_vendor.t($data.goalOptions[$data.goalIndex]),
    v: $data.goalOptions,
    w: $data.goalIndex,
    x: common_vendor.o((...args) => $options.onGoalChange && $options.onGoalChange(...args)),
    y: common_vendor.t($data.durationOptions[$data.durationIndex]),
    z: $data.durationOptions,
    A: $data.durationIndex,
    B: common_vendor.o((...args) => $options.onDurationChange && $options.onDurationChange(...args)),
    C: common_vendor.o((...args) => $options.search && $options.search(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
