<template>
	<view style="background-color: #333;">
	<view class="icon-button" @click="handleIconClick">
	      <image src="../../static/icon/history.png" class="icon-image"></image>
	</view>
  <view class="wrapper">
    <view class="form-container">
      <view class="form-item">
        <text>身高 (cm):</text>
        <input :value="height" @input="updateHeight" type="number" placeholder="请输入身高" />
      </view>
      <view class="form-item">
        <text>体重 (kg):</text>
        <input :value="weight" @input="updateWeight" type="number" placeholder="请输入体重" />
      </view>
	  <view class="form-item">
	    <text>期望体重 (kg):</text>
	    <input :value="targetWeight" @input="updateTargetWeight" type="number" placeholder="请输入期望体重" />
	  </view>
      <view class="form-item">
        <text>性别:</text>
        <picker mode="selector" :range="genderOptions" :value="genderIndex" @change="onGenderChange">
          <view class="picker">{{ genderOptions[genderIndex] }}</view>
        </picker>
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
      height: '',
      weight: '',
      genderIndex: 0,
      goalIndex: 0,
      durationIndex: 0,
      targetWeight: '',
      genderOptions: ['男', '女'],
      goalOptions: ['减脂', '增肌'],
      durationOptions: ['4', '8', '12', '16', '20']
    };
  },
  methods: {
    handleIconClick(e){
		uni.navigateTo({
		        url: '../historyPlan/historyPlan'
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
      // 记录或处理用户输入的值
      const searchData = {
        height: this.height,
        weight: this.weight,
        gender: this.genderOptions[this.genderIndex],
        goal: this.goalOptions[this.goalIndex],
        duration: this.durationOptions[this.durationIndex],
        targetWeight: this.targetWeight
      };
    
      // 将 searchData 转换成自然语言文本（中文）
      const formattedText = `我要进行增肌，帮我合理安排一周的健身计划`;
    
    
      // 通过接口发送该请求
      uni.request({
        url: 'https://apifoxmock.com/m1/5119278-4782393-default/api/aiPlan',  
        method: 'POST',
        data: {
          text: formattedText  // 发送格式化后的文本
        },
        success: (res) => {
          console.log('AI 计划:', res.data);
        },
        fail: (err) => {
          console.error('请求失败:', err);
        }
      });
    }
	

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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
}

.form-container {
  width: 300px;
  padding: 20px;
  background-color: #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-item {
  margin-bottom: 20px;
}

.picker {
  padding: 10px;
  background-color: #eee;
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
