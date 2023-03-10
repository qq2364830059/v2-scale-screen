<!-- 自适应屏幕组件 -->
<template>
  <div class="scale_box" :style="`width:${width}px;height:${height}px;transform:scale(${widthRatio},${heightRatio});transform-origin:left top;`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScaleScreen',
  props: {
    // 接受props传进来的屏幕大小
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
  },
  data() {
    return {
      widthRatio: 1, // 屏幕宽度与设计稿宽度的缩放比
      heightRatio: 1, // 屏幕高度与设计稿高度缩放比
    }
  },
  created() {
    this.refreshScale()
    window.addEventListener(
      'pageshow',
      function (e) {
        if (e.persisted) {
          // 浏览器后退的时候重新计算
          this.refreshScale()
        }
      },
      false
    )
    window.addEventListener('resize', this.refreshScale, false)
  },
  methods: {
    refreshScale() {
      const docWidth = document.documentElement.clientWidth
      const docHeight = document.documentElement.clientHeight
      this.widthRatio = docWidth / this.width
      this.heightRatio = docHeight / this.height
      // 应对浏览器全屏切换前后窗口因短暂滚动条问题出现未占满情况
      setTimeout(function () {
        const lateWidth = document.documentElement.clientWidth
        const lateHeight = document.documentElement.clientHeight
        if (lateWidth === docWidth) return

        this.widthRatio = lateWidth / this.width
        this.heightRatio = lateHeight / this.height
      }, 0)
    },
  },
}
</script>

<style scoped>
/* 引入清除默认样式，干掉了浏览器的滚动条 */
@import url(@/assets/css/reset.css);
.scale_box {
  overflow: hidden;
}
</style>
