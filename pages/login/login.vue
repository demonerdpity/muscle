<template>
  <view class="container">
    <view class="header">
      <view class="icon-placeholder icon-image"></view>
      <text class="title">登录账号</text>
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
      <button @tap="login" class="login-btn">登录</button>
      <view class="register">
        <navigator url="../find/find">找回密码></navigator>
      </view>
	  <view class="register">
	    <navigator url="../register/register">注册></navigator>
	  </view>
	  
    </view>
  </view>
</template>

<script>
import { useCounterStore } from '@/store/store.js'	
	
export default {
  data() {
	const store = useCounterStore();  
    return {
	  store: useCounterStore(),
      username: '',
      password: ''
    }
  },
  onLoad() {
  const store = useCounterStore();
  },
  methods: {
    login() {
      console.log('登录尝试', this.username, this.password)
      
	  uni.request({
	    url: 'https://127.0.0.1:5000/api/login',  
	    method: 'POST',
	    data: {
	      user_name: this.username,  
		  password: this.password
	    },
		
	    success: (res) => {
	      console.log('登录成功');
		  console.log(res.data.data.id)
		  console.log(this.username)
		  this.store.id = res.data.data.id;
		  this.store.username = this.username;
		  uni.setStorageSync("id", this.store.id);


		  uni.switchTab({
		          url: '../index/index'
		        });
	    },
	    fail: (err) => {
	      this.store.id = res.data.data.id;
	      this.store.username = this.username;
	      uni.switchTab({
	              url: '../index/index'
	            });
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