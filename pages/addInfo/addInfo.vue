<template>
	<view style="background-color: #333; height: 100%;">
  <view class="wrapper">
    <view class="form-container">
      <view class="form-row">
                <view class="form-item">
                  <text>身高 (cm):</text>
                  <picker mode="selector" :range="heightOptions" :value="heightIndex" @change="onHeightChange">
                    <view class="picker">{{ heightOptions[heightIndex] }}</view>
                  </picker>
                </view>
                <view class="form-item">
                  <text>体重 (kg):</text>
                  <picker mode="selector" :range="weightOptions" :value="weightIndex" @change="onWeightChange">
                    <view class="picker">{{ weightOptions[weightIndex] }}</view>
                  </picker>
                </view>
              </view>
      
              <view class="form-row">
                <view class="form-item">
                  <text>期望体重 (kg):</text>
                  <picker mode="selector" :range="targetWeightOptions" :value="targetWeightIndex" @change="onTargetWeightChange">
                    <view class="picker">{{ targetWeightOptions[targetWeightIndex] }}</view>
                  </picker>
                </view>
                <view class="form-item">
                  <text>性别:</text>
                  <picker mode="selector" :range="genderOptions" :value="genderIndex" @change="onGenderChange">
                    <view class="picker">{{ genderOptions[genderIndex] }}</view>
                  </picker>
                </view>
              </view>
      
                <view class="form-item">
                  <text>目的:</text>
                  <picker mode="selector" :range="goalOptions" :value="goalIndex" @change="onGoalChange">
                    <view class="picker">{{ goalOptions[goalIndex] }}</view>
                  </picker>
                </view>
                <view class="form-item">
                  <text>训练时长 (周):</text>
                  <picker mode="selector" :range="durationOptions" :value="durationIndex" @change="onDurationChange">
                    <view class="picker">{{ durationOptions[durationIndex] }}</view>
                  </picker>
                </view>

      <button class="search-button" @click="search">生成计划</button>
    </view>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
	

  }
};
</script>

<style scoped>
	
	
	.icon-button {
	  position: absolute;
	  top: 40rpx; /* 距离顶部10rpx */
	  right: 44rpx; /* 距离右边20rpx */
	  width: 50rpx;
	  height: 50rpx;
	  background: #333;
	}
	
	.icon-image {
	  width: 45rpx;
	  height: 45rpx;
	}
	
.input-field {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000; /* 黑色边框 */
  background-color: #f9f9f9;
  font-size: 16px;
  box-sizing: border-box;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 使内容在上下方向留有空间 */
    align-items: center;
    height: auto; /* 设置高度，减去顶部按钮和tarBar的高度 */
    padding-top: 100rpx; /* 距离顶部按钮的空间 */
    padding-bottom: 80rpx; /* 距离底部tarBar的空间 */
    background-color: #333;
	color: #fff;
  }

.form-container {
  width: 300px;
  padding: 10px;
  background-color: #111;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: absolute; /* Use absolute positioning */
  bottom: 250rpx; /* Position 100rpx from the bottom */
}

 .answer-container {
     width: 300px;
     padding: 10px;
     background-color: #222;
     border-radius: 8px;
     margin-bottom: 20px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
     max-height: 300px; /* 设置一个最大高度，避免过高 */
	 overflow-y: auto;
   }

  .answer-text {
  width: 100%; /* 让文本宽度填满容器 */
  white-space: normal; /* 确保文本不会在一行内显示，避免左右滚动 */
  word-wrap: break-word; /* 如果有长单词，会自动换行 */
  color: white;
}
.form-row {
  display: flex;
  justify-content: space-between;
}

.form-item {
  flex: 1;
  margin: 0 10px 20px;
}

.picker {
  padding: 10px;
  background-color: #222;
  border-radius: 4px;
}

.search-button {
  width: 80%;
  padding: 10px;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-align: center;
}
</style>
