<template style="background-color: #000000; min-height: 100vh;">
  <view>
    <swiper 
      indicator-dots 
      indicator-color="rgba(255,255,255,0.3)" 
      indicator-active-color="#ffffff" 
      circular 
      autoplay 
      interval="2000"
      class="custom-swiper"
    >
      <swiper-item>
        <image src="../../static/pic/swiper3.jpg" class="custom-image"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/pic/swiper2.jpg" class="custom-image"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/pic/swiper1.jpg" class="custom-image"></image>
      </swiper-item>
    </swiper>
	
	<view class="info">
	  <view class="info-item">
	    <image class="icon" src="../../static/icon/AI.png"></image>
	    <text class="text">ai制作</text>
	  </view>
	  <view class="info-item">
	    <image class="icon" src="../../static/icon/photoshop.png"></image>
	    <text class="text">质量p图</text>
	  </view>
	  <view class="info-item">
	    <image class="icon" src="../../static/icon/good.png"></image>
	    <text class="text">多种身形</text>
	  </view>
	  <view class="info-item">
	    <image class="icon" src="../../static/icon/star.png"></image>
	    <text class="text">100%好评</text>
	  </view>
	</view>
	
    <button class="custom-button" @click="handleClick">
          <view class="circle-plus">
            <view class="plus">+</view>
			<view style="font-size: 20rpx; color: #007BFF;">开始创作</view>
          </view>
	</button>
	
	<view class="button-container">
	      <view class="square-button1" @click="handleHistoryPictureClick">
	        <image class="icon" src="../../static/icon/historyImage.png"></image>
	        <text>历史记录</text>
	      </view>
	      <view class="square-button2">
	        <image class="icon" src="../../static/icon/vip.png"></image>
	        <text>按钮二</text>
	      </view>
	</view>
	
	
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    };
  },
  onLoad() {},
  methods: {
	  handleClick() {
	        // 在这里处理按钮点击事件
	        console.log("按钮被点击！");
	      },
	  handleHistoryPictureClick(){
	  	uni.navigateTo({
	  	        url: '../historyPicture/historyPicture'
	  	      });
	  }
  },
};
</script>

<style lang="scss">	
.button-container {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 20rpx;
  margin-top: 20rpx;
}

.square-button1 {
  width: 300rpx;
  height: 300rpx;
  background-color: powderblue;
  border-radius: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
}

.square-button2 {
  width: 300rpx;
  height: 300rpx;
  background-color: lightpink;
  border-radius: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
}

.square-button .icon {
  width: 100rpx;
  height: 100rpx;
}

.square-button text {
  margin-top: 10rpx;
  font-size: 28rpx;
  color: #333;
}

.info {
  display: flex;
  justify-content: space-between;
  background-color: #222;
  border-radius: 10rpx;
  padding-right: 10rpx;
  padding-top: 10rpx;
  padding-bottom: 8rpx;
}

.info-item {
  display: flex;
  align-items: center;
  flex: 1; /* 每个项目均分宽度 */
  justify-content: center; /* 居中对齐图标和文字 */
}

.icon {
  width: 20rpx; /* 缩小图标大小 */
  height: 20rpx;
  margin-right: 4rpx; /* 缩小图标与文字之间的间隙 */
}

.text {
  font-size: 28rpx; /* 缩小文字大小 */
  color: white;
}



.custom-swiper {
  width: 740rpx; 
  height: 200px; /* 你想要的统一高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; /* 圆角设置 */
  overflow: hidden;
  margin-left: 5rpx;
  margin-right: 5rpx;
  margin-top: 20rpx;
  margin-bottom: 10rpx;
  background-color: #f0f0f0; /* 设置一个背景颜色以更清楚地看到图片 */
}

.custom-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例，填充整个容器 */
  display: block;
}

.custom-button {
  width: 740rpx;
  height: 100px; /* 自行调整按钮高度 */
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* 磨砂质感 */
  margin-left: 5rpx;
  margin-right: 5rpx;
}



.plus {
  font-size: 24px;
  color: #007BFF; /* 自定义颜色 */
}
</style>
