"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      store: store_store.useCounterStore(),
      imageSrc: "",
      filePath: "",
      generatedImg: "",
      generateText: ""
    };
  },
  methods: {
    async chooseImage() {
      try {
        const res = await common_vendor.index.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          sourceType: ["album", "camera"]
        });
        if (res.tempFilePaths && res.tempFilePaths.length > 0) {
          this.filePath = res.tempFilePaths[0];
          await this.uploadImage(filePath);
        }
      } catch (error) {
        console.error("选择图片失败", error);
      }
    },
    async uploadImage() {
      try {
        const uploadTask = await common_vendor.index.uploadFile({
          url: "https://127.0.0.1:5000/api/upload",
          filePath: this.filePath,
          name: "file"
        });
        const data = JSON.parse(uploadTask.data);
        if (data.url) {
          this.imageSrc = data.url;
        }
      } catch (error) {
        console.error("上传失败", error);
      }
    },
    async generate() {
      this.generateText = "正在生成中...";
      common_vendor.index.request({
        url: "https://127.0.0.1:5000/api/aiPS",
        method: "POST",
        data: {
          url: this.filePath,
          id: this.store.id
        },
        success: (res) => {
          console.log("success");
        },
        fail: () => {
          console.log("fail");
        }
      });
    },
    showActionSheet() {
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
    },
    saveImage() {
      if (this.generatedImg) {
        common_vendor.index.downloadFile({
          url: this.generatedImg,
          // 下载生成的图片
          success: (downloadRes) => {
            if (downloadRes.statusCode === 200) {
              common_vendor.index.saveImageToPhotosAlbum({
                filePath: downloadRes.tempFilePath,
                // 保存到相册
                success: () => {
                  common_vendor.index.showToast({
                    title: "保存成功",
                    icon: "success"
                  });
                },
                fail: (err) => {
                  console.error("保存图片失败", err);
                  common_vendor.index.showToast({
                    title: "保存失败",
                    icon: "none"
                  });
                }
              });
            }
          },
          fail: (err) => {
            console.error("下载图片失败", err);
            common_vendor.index.showToast({
              title: "下载失败",
              icon: "none"
            });
          }
        });
      } else {
        common_vendor.index.showToast({
          title: "没有可保存的图片",
          icon: "none"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.imageSrc
  }, $data.imageSrc ? {
    b: $data.imageSrc
  } : {}, {
    c: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args)),
    d: common_assets._imports_0$3,
    e: $data.generatedImg
  }, $data.generatedImg ? {
    f: $data.generatedImg
  } : {}, {
    g: common_vendor.t($data.generateText),
    h: common_vendor.o((...args) => $options.showActionSheet && $options.showActionSheet(...args)),
    i: common_vendor.o((...args) => $options.generate && $options.generate(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f30066d5"]]);
wx.createPage(MiniProgramPage);
