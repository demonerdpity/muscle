<script>
import { useCounterStore } from '@/store/store.js'	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			const store = useCounterStore();
			const id = uni.getStorageSync("id");
			if (id) {
				store.id = id;
				// this.checkUserId(userId);
			    console.log("Retrieved ID:", id);
			} else {
				// uni.redirectTo({
				//       url: '/pages/login/login'  // 登录页路径
				//     });
			    console.log("No ID found");
			}

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		// methods: {
		//   async checkUserId(userId) {
		//     try {
		//       // 调用数据库接口，查询用户数据
		//       const response = await uni.request({
		//         url: '你的数据库接口URL',  // 替换为实际接口
		//         method: 'POST',
		//         data: { userId }
		//       });
		
		//       // 假设 response.data 是返回的查询结果
		//       if (response.data符合条件) {
		//         // 如果符合条件，跳转到首页
		//         uni.switchTab({
		//           url: '/pages/index/index'  // 首页路径
		//         });
		//       } else {
		//         // 不符合条件，跳转到登录页
		//         uni.redirectTo({
		//           url: '/pages/login/login'  // 登录页路径
		//         });
		//       }
		//     } catch (error) {
		//       // 处理错误并跳转到登录页
		//       console.error('查询失败', error);
		//       uni.redirectTo({
		//         url: '/pages/login/login'  // 登录页路径
		//       });
		//     }
		//   }
		// }
	}
</script>

<style>
	/*每个页面公共css */
	page{
		width: 100%;
		height: 100%;
		background-color: #222;
	}
	
	uni-action-sheet {
	  background-color: #333; /* 暗色背景 */
	  color: #fff; /* 白色字体 */
	}
</style>
