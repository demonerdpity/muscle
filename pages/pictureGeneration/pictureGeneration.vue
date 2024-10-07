<template>
  <view class="outer-container">
    <view class="rec-container">
      <!-- 第一个矩形框 -->
      
        <view class="rectangle" @click="chooseImage">
			<image v-if="imageSrc" :src="imageSrc" mode="aspectFill" class="image"></image>
			<text v-else class="placeholder">点击选择图片</text>
		</view>
      
      <!-- 箭头图标的占位 -->
      <view class="arrow-placeholder">
        <image src="../../static/icon/arrow-down.png" class="icon-image"></image>
      </view>
      <!-- 第二个矩形框，带虚线边框 -->
      <view class="rectangle dashed-rectangle" @longpress="showActionSheet">
		<image v-if="generatedImg" :src="generatedImg" mode="aspectFill" class="image"></image>
        <text class="rectangle-text">{{generateText}}</text>
      </view>
	  <view style="height: 100rpx"></view>
      <!-- 底部按钮 -->
      <button class="generate-button" @click="generate">生成图片</button>
    </view>
  </view>
</template>

<script>
import { useCounterStore } from '@/store/store.js'	
export default {
  data() {
    return {
		store: useCounterStore(),
		imageSrc: '',
		filePath: '',
		generatedImg: '',
		generateText: ''
	};
  },
  methods:{
	  async chooseImage() {
	        try {
	          const res = await uni.chooseImage({
	            count: 1,
	            sizeType: ['original', 'compressed'],
	            sourceType: ['album', 'camera']
	          });
	  
	          if (res.tempFilePaths && res.tempFilePaths.length > 0) {
	            this.filePath = res.tempFilePaths[0];
	            await this.uploadImage(filePath);
	          }
	        } catch (error) {
	          console.error('选择图片失败', error);
	        }
	      },
	      async uploadImage() {
	        try {
	          const uploadTask = await uni.uploadFile({
	            url: 'https://127.0.0.1:5000/api/upload', 
	            filePath: this.filePath,
	            name: 'file'
	          });
	  
	          const data = JSON.parse(uploadTask.data);
	          if (data.url) {
	            this.imageSrc = data.url; // Use 'this' to access imageSrc in data
	          }
	        } catch (error) {
	          console.error('上传失败', error);
	        }
	      },
		  async generate() {
			  this.generateText = '正在生成中...';
			  uni.request({
			  	url: 'https://127.0.0.1:5000/api/aiPS',
				method: 'POST',
				data:{
					url: this.filePath,
					id: this.store.id
				},
				success: (res) => {
						 console.log('success') 
						 //赋值
						 // this.generatedImg = 
				},
				fail: () => {
						  console.log('fail')
				}
			  });
			  
		  },
		  showActionSheet (){
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
			   saveImage() {
			        if (this.generatedImg) {
			          uni.downloadFile({
			            url: this.generatedImg, // 下载生成的图片
			            success: (downloadRes) => {
			              if (downloadRes.statusCode === 200) {
			                uni.saveImageToPhotosAlbum({
			                  filePath: downloadRes.tempFilePath, // 保存到相册
			                  success: () => {
			                    uni.showToast({
			                      title: '保存成功',
			                      icon: 'success'
			                    });
			                  },
			                  fail: (err) => {
			                    console.error('保存图片失败', err);
			                    uni.showToast({
			                      title: '保存失败',
			                      icon: 'none'
			                    });
			                  }
			                });
			              }
			            },
			            fail: (err) => {
			              console.error('下载图片失败', err);
			              uni.showToast({
			                title: '下载失败',
			                icon: 'none'
			              });
			            }
			          });
			        } else {
			          uni.showToast({
			            title: '没有可保存的图片',
			            icon: 'none'
			          });
			        }
			      }
			    
	    }
  
};
</script>

<style scoped>
.image {
	width: 100%;
	height: 100%;
	border-radius: 10px;
}
.placeholder{
	color: #999;
	text-align: center;
}
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}

.rec-container {
  width: 80%;
  height: 80%;
  background-color: #111;
  border-radius: 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rpx;
}

.icon-image {
  width: 45rpx;
  height: 100rpx;
}

.rectangle {
  width: 90%;
  height: 25%;
  background-color: #222;
  border-radius: 20rpx;
  border: 2rpx solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rpx;
}

.dashed-rectangle {
  border-style: dashed;
}

.rectangle-text {
  color: white;
  font-size: 30rpx;
}

.arrow-placeholder {
  height: 120rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20rpx;
}

.generate-button {
  width: 90%;
  padding: 15rpx;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 20rpx;
  text-align: center;
  font-size: 30rpx;
  margin-top: 20rpx;
}
</style>