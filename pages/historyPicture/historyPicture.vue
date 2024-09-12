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
	
	 <!-- 图片网格 -->
	    <view class="image-grid">
	      <view class="image-item" v-for="(image, index) in images" :key="index">
	        <image 
	          :src="image" 
	          mode="aspectFill" 
	          class="grid-image" 
	          @click="previewImage(index)"
			  @longpress="showActionSheet(index)"
	        />
	      </view>
	    </view>
		
  </view>
</template>

<script>
export default {
  data() {
    return {
      images: [
              'https://img.zcool.cn/community/0168c359730129a8012193a31496a8.JPG@2o.jpg',
              'https://th.bing.com/th/id/OIP.ezc5rRMP_ZWVRzqnkeXmaAHaE9?rs=1&pid=ImgDetMain',
              'https://th.bing.com/th/id/OIP.eGVrg6NWGCMEGt61WiGngQHaE0?rs=1&pid=ImgDetMain'
            ]  
    };
  },
  onLoad() {},
  methods: {
	  handleClick() {
	        // 在这里处理按钮点击事件
	        console.log("按钮被点击！");
	      },
	  previewImage(index) {
	        uni.previewImage({
	          current: this.images[index],
	          urls: this.images
	        });
			console.log('展示图片')
	      },
		  showActionSheet(index) {
		        this.currentImage = this.images[index];
		        // 显示底部弹出的操作菜单
		        uni.showActionSheet({
		          itemList: ['保存图片'],
		          success: (res) => {
		            if (res.tapIndex === 0) {
		              this.saveImage();
		            }
		          },
		          fail: () => {
		            console.log('操作取消');
		          }
		        });
		      },
  },
};
</script>

<style lang="scss">	
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

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20rpx;
}

.image-item {
  width: 48%;
  position: relative;  /* 确保使用 padding-bottom 技巧来保持比例 */
  margin-bottom: 20rpx;
  /* 使用 padding-bottom 来控制高度，保证正方形 */
  padding-bottom: 48%;  /* 使宽度和高度相等 */
}

.grid-image {
  width: 100%;
  height: 100%;
  position: absolute;  /* 让图片绝对定位以填充父容器 */
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 8rpx;
}

</style>
