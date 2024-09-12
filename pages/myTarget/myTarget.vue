<template>
  <view style="background-color: #333;">
    

    <!-- 历史目标列表 -->
    <view class="history-list">
      <block v-for="(plan, index) in plans" :key="index">
        <button class="history-button" @click="showPlanDetails(plan)">
          <view class="history-content">
            <text class="history-date">{{ plan.date }}</text>
            <text class="history-summary">{{ plan.summary }}</text>
          </view>
        </button>
      </block>
    </view>

    <!-- 隐藏的详情卡片，点击按钮时显示 -->
    <view v-if="selectedPlan" class="plan-card">
      <view class="plan-card-content">
        <text>{{ selectedPlan.details }}</text>
        <button class="close-button" @click="closeCard">关闭</button>
      </view>
    </view>
  </view>
</template>


<script>
	export default {
	  data() {
	    return {
	      // 伪造的历史计划数据
	      plans: [
      { date: '2024-09-10', summary: '减重5公斤', details: '体重由80kg减少到75kg' },
      { date: '2024-09-09', summary: '体重不变增肌', details: '体重保持80kg不变，训练腹肌' },
      { date: '2024-09-08', summary: '减重10公斤', details: '体重由90kg减少到80kg' },
      { date: '2024-09-07', summary: '增肌5公斤', details: '体重从65kg增加到70kg，并增肌训练' },
	  { date: '2024-09-06', summary: '增肌5公斤', details: '体重从70kg增加到75kg，并增肌训练' }
    ],
	      selectedPlan: null // 存储当前选中的计划
	    };
	  },
	  methods: {
	    handleIconClick() {
	      // 图标点击事件逻辑
	      console.log("图标点击，返回或其它操作");
	    },
	    showPlanDetails(plan) {
	      // 显示计划详情卡片
	      this.selectedPlan = plan;
	    },
	    closeCard() {
	      // 隐藏计划详情卡片
	      this.selectedPlan = null;
	    }
	  }
	};

</script>


<style scoped>
.icon-button {
  position: absolute;
  top: 40rpx;
  right: 44rpx;
  width: 50rpx;
  height: 50rpx;
  background: #333;
}

.icon-image {
  width: 45rpx;
  height: 45rpx;
}

.history-list {
  margin-top: 100rpx;
}

.history-button {
  width: 100%;
  padding: 20rpx;
  margin-bottom: 10rpx;
  background-color: #444;
  color: #fff;
  border: none;
  text-align: left;
  border-radius: 8rpx;
  box-sizing: border-box;
}

.history-button text {
  font-size: 16px;
}

/* 卡片样式 */
.plan-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 20rpx;
  background-color: lightblue;
  border-radius: 10rpx;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.plan-card-content {
  text-align: center;
}

.close-button {
  margin-top: 20rpx;
  padding: 10rpx;
  background-color: #000080;
  color: #fff;
  border: none;
  border-radius: 4rpx;
}

.history-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.history-date {
  font-size: 18px; /* 日期的字体大小 */
  color: #ffffff;
}

.history-summary {
  font-size: 14px; /* 摘要的字体大小 */
  color: #999999; /* 摘要的颜色设置为浅灰色 */
}
</style>



