<template>
	<view style="background-color: #333; height: 100%;">
	<view class="icon-button" @click="handleIconClick">
	      <image src="../../static/icon/history.png" class="icon-image"></image>
	</view>
  <view class="wrapper">
	<view class="answer-container"v-if="showAnswer">
		<text class="answer-text" selectable="true">hfjdksajfhsalhfjdsklahfljksafhsjaklfhdskaljfdpsoFOPWEUhkjdlhfkajlhfdklsafh</text>
	</view>
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
       heightOptions: Array.from({ length: 56 }, (v, k) => 145 + k), // 生成145到200的选项
          weightOptions: Array.from({ length: 96 }, (v, k) => 35 + k),  // 生成35到130的选项
		  targetWeightOptions: Array.from({ length: 96 }, (v, k) => 35 + k), // 生成35到130的选项
          heightIndex: 0,
          weightIndex: 0,
		  targetWeightIndex: 0,
          height: '',
          weight: '',
          targetWeight: '',
          genderIndex: 0,
          goalIndex: 0,
          durationIndex: 0,
          genderOptions: ['男', '女'],
          goalOptions: ['减脂', '增肌'],
          durationOptions: ['4', '8', '12', '16', '20'],
		  showAnswer: false,
    };
  },
  onShow() {
      // 每次页面重新显示时重置文字状态
      this.heightOptions = Array.from({ length: 56 }, (v, k) => 145 + k), // 生成145到200的选项
         this.weightOptions= Array.from({ length: 96 }, (v, k) => 35 + k),  // 生成35到130的选项
		  this.targetWeightOptions= Array.from({ length: 96 }, (v, k) => 35 + k), // 生成35到130的选项
         this.heightIndex = 0,
         this.weightIndex= 0,
		  this.targetWeightIndex = 0,
         this.height = '',
         this.weight = '',
         this.targetWeight = '',
         this.genderIndex = 0,
         this.goalIndex = 0,
         this.durationIndex = 0,
         this.genderOptions = ['男', '女'],
         this.goalOptions = ['减脂', '增肌'],
         this.durationOptions = ['4', '8', '12', '16', '20'],
		  this.showAnswer = false
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
		this.showAnswer = true
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
        url: 'https://127.0.0.1:5000/api/aiPlan',  
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
