<template>
	<view class="wrapper">
		<!-- 个人资料 -->
		<view>
			<view class="top">
				<view class="center">
					<view class="center_top">
						<view class="center_img">
							<!-- 这里可以放自己的静态头像 -->
							<image src="../../static/pic/swiper3.jpg"></image>
							<open-data type="userAvatarUrl" class="user_head"></open-data>
						</view>
						<view class="center_info">
							<view class="center_name">
								<!-- 这里可以放自己的名称图片 -->
								<view>张三</view>
							</view>
							<view class="center_vip">
								<image class="rank_icon" src="../../static/icon/vip.png" />
								<view class="vip_text">
									<text>普通会员</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 统计 -->
		<view class="count">
			<view class="cell" @click="handleHistoryPlanClick">{{historyPlan}}<text>历史计划</text></view>
			<view class="cell" @click="handleHistoryPictureClick">{{historyPicture}}<text>历史图片</text></view>
			<view class="cell" @click="handleHistoryTargetClick">5<text>我的目标</text></view>
			<view class="cell">{{history}}<text>我的足迹</text></view>
		</view>
		<!-- 其它 -->
		<button style="background: #333;position: absolute;bottom: 26.5%;color: skyblue;width: 100%;border-radius: 0%;">问题反馈</button>
		<button style="background: #333;position: absolute;bottom: 20%;color: red;width: 100%;border-radius: 0%;">退出登录</button>
	</view>
</template>

<script>
import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue';
import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue';

export default {
	components: {
		uniList,
		uniListItem,
	},
	data(){
		return{
			historyPlan: 0,
			historyPicture: 0,
			history: 0
		}
	},
	onLoad() {
    // 请求 historyPlan 接口
    uni.request({
      url: 'https://apifoxmock.com/m1/5119278-4782393-default/user/historyPlan/1',
      method: 'GET',
      success: (res) => {
		  console.log('获取成功')
        if (res.data && res.data.data.count !== undefined) {
          this.historyPlan = res.data.data.count;
        }
      },
      fail: () => {
		  console.log('获取失败')
        this.historyPlan = 0; // 出错时默认为 0
      }
    });

    // 请求 historyPicture 接口
    uni.request({
      url: 'https://apifoxmock.com/m1/5119278-4782393-default/user/historyPicture/1',
      method: 'GET',
      success: (res) => {
        if (res.data && res.data.data.count !== undefined) {
          this.historyPicture = res.data.data.count;
        }
      },
      fail: () => {
        this.historyPicture = 0; // 出错时默认为 0
      }
    });

    // 请求 history 接口，这个接口访问是空
    uni.request({
      url: 'https://apifoxmock.com/m1/5119278-4782393-default/user/history/1',
      method: 'GET',
      success: (res) => {
        if (res.data && res.data.data.count !== undefined) {
          this.history = res.data.data.count;
        } else {
          this.history = 0; // 没有 count 时默认为 0
        }
      },
      fail: () => {
        this.history = 0; // 出错时默认为 0
      }
    });
  },
	methods:{
		handleHistoryPlanClick(){
		uni.navigateTo({
		        url: '../historyPlan/historyPlan'
		      });
	},
	handleHistoryTargetClick(){
		uni.navigateTo({
		        url: '../myTarget/myTarget'
		      });
	},
	handleHistoryPictureClick(){
		uni.navigateTo({
		        url: '../historyPicture/historyPicture'
		      });
	}
}
};
</script>

<style scoped lang="scss">
.custom-list-item {
	background-color: #1f1f1f;
	color: #cccccc;
}

.custom-list-item::after {
	border-color: #555555;
}
	
	
Page {
	font-size: 14px;
	color: #cccccc; /* 字体颜色调整为较浅的灰色，适合夜间模式 */
}

.top {
	width: 100%;
	height: 130px;
	background: #1a1a1a; /* 深色背景 */
	padding-top: 15px;
	position: relative;
}

.center {
	width: 95%;
	height: 100px;
	background: #333333; /* 深灰色背景 */
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	border-radius: 5px;
}

.center_top {
	display: flex;
	flex-direction: row;
	width: 80%;
	height: 80px;
	margin: 0 auto;
	margin-top: 20rpx;
	border-bottom: 1px solid #555555; /* 边框颜色改为深灰色 */
}

.center_img {
	width: 66px;
	height: 66px;
	border-radius: 50%;
	overflow: hidden;
}

.center_img image {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}

.center_img .user_head {
	width: 100%;
	height: 100%;
}

.center_info {
	display: flex;
	flex-direction: column;
	margin-top: 20rpx;
	margin-left: 30px;
}

.center_name {
	font-size: 18px;
	color: #ffffff; /* 字体颜色为白色 */
}

.center_phone {
	color: #bebebe;
}

.center_rank {
	width: 50%;
	height: 35px;
	display: flex;
	flex-direction: row;
}

.rank_text {
	height: 35px;
	line-height: 35px;
	margin-left: 10rpx;
	color: #999999; /* 较浅的灰色 */
}

.center_vip image {
	width: 25px;
	height: 25px;
	margin-top: 15rpx;
}

.vip_icon {
	width: 25px;
	height: 25px;
	margin-top: -10rpx;
}

.vip_text {
	margin-top: -55rpx;
	margin-left: 50rpx;
	color: #999999;
}

.center_rank image {
	width: 35px;
	height: 35px;
}

.center_score {
	width: 50%;
	height: 35px;
	display: flex;
	flex-direction: row;
}

.center_score image {
	width: 35px;
	height: 35px;
}

.wrapper {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	background-color: #0d0d0d; /* 背景颜色为纯黑 */
}

.count {
	display: flex;
	margin: 0 20rpx;
	height: 120rpx;
	text-align: center;
	border-radius: 4rpx;
	background-color: #000; /* 较深的灰色背景 */
	color: #e0e0e0; /* 字体颜色为浅灰色 */

	.cell {
		margin-top: 10rpx;
		flex: 1;
		padding-top: 20rpx;
		font-size: 27rpx;
		color: #cccccc; /* 较浅的灰色 */
	}

	text {
		display: block;
		font-size: 24rpx;
		color: #999999; /* 较浅的灰色 */
	}
}

.uni-list-item {
	background-color: #1f1f1f; /* 调整列表项的背景色为深灰色 */
	color: #cccccc; /* 调整列表项文字颜色为浅灰色 */
}

.uni-list-item::after {
	border-color: #555555; /* 列表项底部边框颜色为深灰色 */
}
</style>
