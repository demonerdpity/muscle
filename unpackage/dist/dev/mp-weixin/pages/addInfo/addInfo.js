"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.heightOptions[_ctx.heightIndex]),
    b: _ctx.heightOptions,
    c: _ctx.heightIndex,
    d: common_vendor.o((...args) => _ctx.onHeightChange && _ctx.onHeightChange(...args)),
    e: common_vendor.t(_ctx.weightOptions[_ctx.weightIndex]),
    f: _ctx.weightOptions,
    g: _ctx.weightIndex,
    h: common_vendor.o((...args) => _ctx.onWeightChange && _ctx.onWeightChange(...args)),
    i: common_vendor.t(_ctx.targetWeightOptions[_ctx.targetWeightIndex]),
    j: _ctx.targetWeightOptions,
    k: _ctx.targetWeightIndex,
    l: common_vendor.o((...args) => _ctx.onTargetWeightChange && _ctx.onTargetWeightChange(...args)),
    m: common_vendor.t(_ctx.genderOptions[_ctx.genderIndex]),
    n: _ctx.genderOptions,
    o: _ctx.genderIndex,
    p: common_vendor.o((...args) => _ctx.onGenderChange && _ctx.onGenderChange(...args)),
    q: common_vendor.t(_ctx.goalOptions[_ctx.goalIndex]),
    r: _ctx.goalOptions,
    s: _ctx.goalIndex,
    t: common_vendor.o((...args) => _ctx.onGoalChange && _ctx.onGoalChange(...args)),
    v: common_vendor.t(_ctx.durationOptions[_ctx.durationIndex]),
    w: _ctx.durationOptions,
    x: _ctx.durationIndex,
    y: common_vendor.o((...args) => _ctx.onDurationChange && _ctx.onDurationChange(...args)),
    z: common_vendor.o((...args) => _ctx.search && _ctx.search(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aaebe8fd"]]);
wx.createPage(MiniProgramPage);
