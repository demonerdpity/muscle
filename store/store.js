import { defineStore } from 'pinia';

export const useCounterStore = defineStore('store', {
	state: () => {
		return { count: 0,
				 id: 0,
				 username: '',
		};
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});