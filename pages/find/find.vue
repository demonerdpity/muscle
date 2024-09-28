<template>
  <view class="container">
    <view class="header">
      <view class="icon-placeholder icon-image"></view>
      <text class="title">重置密码</text>
    </view>
    <view class="login-container">
      <view class="input-group">
        <input v-model="username" type="text" placeholder="请输入用户名" placeholder-style="color: #888;" />
        <view class="underline"></view>
      </view>
      <view class="input-group">
        <input v-model="password" type="password" placeholder="请输入密码" placeholder-style="color: #888;" />
        <view class="underline"></view>
      </view>
	  <view class="input-group">
	    <input v-model="passwordComfirm" type="password" placeholder="请确认密码" placeholder-style="color: #888;" />
	    <view class="underline"></view>
	  </view>
      <button @tap="update" class="login-btn">重置密码</button>
    </view>
  </view>
</template>

<script>
import { useCounterStore } from '@/store/store.js'	
export default {
  data() {
    return {
	  store: useCounterStore(),
      username: '',
      password: '',
	  passwordComfirm: ''
    }
  },
  methods: {
    update() {
      if(this.password != this.passwordComfirm){
		  uni.showToast({
		        title: '两次输入的密码不一致',  // 显示错误提示
		        icon: 'none',
		        duration: 2000
		      });
		      return;  // 直接返回，不进行后续操作
	  }
	  uni.request({
	      url: '', // 替换为你的后端接口地址
	      method: 'POST',  // 或 'PUT' 根据你的后端 API
	      data: {
			user_name: this.username,
	        password: this.password // 发送更新的密码
	      },
	      success: (res) => {
	        // 假设后端返回的数据结构是 res.data.data.ifSuccess
	        if (res.data.data.ifSuccess === true) {
	          uni.showToast({
	            title: '密码更新成功',
	            icon: 'success',
	            duration: 2000
	          });
	          // 这里可以加入密码更新成功后的逻辑，比如跳转页面
	        } else {
	          uni.showToast({
	            title: '密码更新失败',
	            icon: 'none',
	            duration: 2000
	          });
	        }
	      },
	      fail: (error) => {
	        // 处理请求失败的情况
	        uni.showToast({
	          title: '请求失败，请稍后再试',
	          icon: 'none',
	          duration: 2000
	        });
	        console.error(error);  // 输出错误日志
	      }
	    });
    }
  }
}
</script>

<style>

	
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* 深色背景 */
  padding-top: 100rpx; /* 为顶部标题留出空间 */
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60rpx;
}

.icon-placeholder {
  width: 80rpx;
  height: 80rpx;
  margin-right: 20rpx;
  border-radius: 40rpx; /* 保持圆形 */
  background-color: #333; /* 保留背景色，以防图片加载失败 */
}

.icon-image {
  background-image: url('/static/icon/wxlogin.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  font-size: 48rpx;
  color: #ffffff;
  font-weight: bold;
}

.login-container {
  width: 80%;
  padding: 40rpx;
}

.input-group {
  margin-bottom: 40rpx;
}

input {
  width: 100%;
  height: 80rpx;
  background-color: transparent;
  color: #ffffff;
  font-size: 32rpx;
  border: none;
}

.underline {
  height: 2rpx;
  background-color: #888;
  width: 100%;
}

.login-btn {
  width: 100%;
  height: 90rpx;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 45rpx;
  font-size: 32rpx;
  margin-top: 60rpx;
}

.register {
  text-align: right;
  margin-top: 40rpx;
}

.register navigator {
  color: #4CAF50;
  font-size: 28rpx;
}
</style>