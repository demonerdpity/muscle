"use strict";
const common_vendor = require("../common/vendor.js");
const useCounterStore = common_vendor.defineStore("store", {
  state: () => {
    return {
      count: 0,
      id: 0,
      username: ""
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    }
  }
});
exports.useCounterStore = useCounterStore;
