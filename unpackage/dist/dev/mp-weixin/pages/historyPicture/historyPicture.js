"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    store_store.useCounterStore();
    return {
      images: [
        "https://img.zcool.cn/community/0168c359730129a8012193a31496a8.JPG@2o.jpg",
        "https://th.bing.com/th/id/OIP.ezc5rRMP_ZWVRzqnkeXmaAHaE9?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.eGVrg6NWGCMEGt61WiGngQHaE0?rs=1&pid=ImgDetMain"
      ],
      historyPicture: []
    };
  },
  onLoad() {
    const store = store_store.useCounterStore();
    const userId = store.id;
    common_vendor.index.request({
      url: `https://127.0.0.1:5000/user/historyPicture/${userId}`,
      method: "GET",
      success: (res) => {
        if (res.data && res.data.data.count !== void 0) {
          this.historyPicture = res.data.data.list;
          console.log(this.historyPicture);
        }
      },
      fail: () => {
        this.historyPicture = [];
      }
    });
  },
  methods: {
    handleClick() {
      console.log("按钮被点击！");
    },
    previewImage(index) {
      common_vendor.index.previewImage({
        current: this.images[index],
        urls: this.images
      });
      console.log("展示图片");
    },
    saveImage() {
      common_vendor.index.downloadFile({
        url: this.currentImage,
        // 通过 this.currentImage 获取点击图片的 URL
        success: (downloadResult) => {
          if (downloadResult.statusCode === 200) {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: downloadResult.tempFilePath,
              // 下载图片的临时文件路径
              success: () => {
                common_vendor.index.showToast({
                  title: "图片保存成功",
                  icon: "success",
                  duration: 2e3
                });
              },
              fail: (err) => {
                console.log("保存失败", err);
                common_vendor.index.showToast({
                  title: "保存失败",
                  icon: "none",
                  duration: 2e3
                });
              }
            });
          } else {
            common_vendor.index.showToast({
              title: "图片下载失败",
              icon: "none",
              duration: 2e3
            });
          }
        },
        fail: (err) => {
          console.log("下载失败", err);
          common_vendor.index.showToast({
            title: "图片下载失败",
            icon: "none",
            duration: 2e3
          });
        }
      });
    },
    showActionSheet(index) {
      this.currentImage = this.images[index];
      console.log(this.currentImage);
      common_vendor.index.showActionSheet({
        itemList: ["保存图片"],
        success: (res) => {
          if (res.tapIndex === 0) {
            this.saveImage();
          }
        },
        fail: () => {
          console.log("操作取消");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_vendor.f($data.images, (image, index, i0) => {
      return {
        a: image,
        b: common_vendor.o(($event) => $options.previewImage(index), index),
        c: common_vendor.o(($event) => $options.showActionSheet(index), index),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
