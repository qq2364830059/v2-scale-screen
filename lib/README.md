# v2-scale-screen

## 下载

```
npm i v2-scale-screen
```

**GitHub源码地址：**  https://github.com/qq2364830059/v2-scale-screen

**Gitee源码地址：** ？？？？？？

## 引入

```js
import scaleScreen from 'v2-scale-screen'
import 'v2-scale-screen/v2-scale-screen.css'

Vue.use(scaleScreen)
```

`<scale-screen></scale-screen>`组件，铺满浏览器的可视区域，您可以将组件插入其中，

```vue
<template>
    <scale-screen>
      <router-view></router-view>
    </scale-screen>
</template>
```

## 注意:

1. `import 'v2-scale-screen/v2-scale-screen.css'` 引入的css，清除了默认样式 ，全局设置了隐藏body的滚动条和禁止向下滚动，并且超出了`<scale-screen></scale-screen>` 容器（可视区域）会被隐藏。

   在跟`scale-screen`组件**上级或同级**组件中想要滚动条必须，设置body的滚动条或当前最大的父级元素设置`overflow:auto`

   - **清除默认样式**

     ```css
     *{
         box-sizing: border-box;
     }
     
     /* 隐藏右侧滚动条 */
     body::-webkit-scrollbar {
         display: none;
     }
       
     body {
         /* 隐藏右侧滚动条 */
         -ms-overflow-style: none;
         overflow: -moz-scrollbars-none;
         scrollbar-width: none;
         overflow: hidden;
     }
     
     body, dl, dt, dd, ul, ol, li, pre, form, fieldset, input, p, blockquote, th, td {
         font-weight: 400;
         margin: 0;
         padding: 0;
     }
     
     h1, h2, h3, h4, h4, h5 {
         margin: 0;
         padding: 0;
     }
     
     body {
         background-color: #FFFFFF;
         color: #FFFFFF ;
         font-family: Helvetica, Arial, sans-serif;
         font-size: 12px;
         /* padding: 0 10px; */
         text-align: left;
     }
     
     input,button{
         outline: none;
         border: none;
         background: none;
     }
     
     select {
         font-size: 12px;
     }
     
     table {
         border-collapse: collapse;
     }
     
     fieldset, img {
         border: 0 none;
     }
     
     fieldset {
         margin: 0;
         padding: 0;
     }
     
     fieldset p {
         margin: 0;
         padding: 0 0 0 8px;
     }
     
     legend {
         display: none;
     }
     
     address, caption, em, strong, th, i {
         font-style: normal;
         font-weight: 400;
     }
     
     table caption {
         margin-left: -1px;
     }
     
     hr {
         border-bottom: 1px solid #FFFFFF;
         border-top: 1px solid #E4E4E4;
         border-width: 1px 0;
         clear: both;
         height: 2px;
         margin: 5px 0;
         overflow: hidden;
     }
     
     ol, ul {
         list-style-image: none;
         list-style-position: outside;
         list-style-type: none;
     }
     
     caption, th {
         text-align: left;
     }
     
     q:before, q:after, blockquote:before, blockquote:after {
         content: "";
     }
     
     /* 超出一行以省略号的形式出现 */
     .ellipsis_txt{
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
     }
     
     ```

   - `scale-screen`组件的css样式

     ```css
     .scale_box {
       overflow: hidden;
     }
     ```

2. **实现上下文字滚动时，会出现文字抖动的bug**

   原因：`scale-screen`组件 使用的是scale缩放进行自适应，才出现的bug

   **解决办法：**  使用css动画实现文字上下滚动效果。使用**内置组件？？？？**解决。

## prop参数

| 参数名 | 描述                                      |
| ------ | ----------------------------------------- |
| width  | `Number`类型，默认值：1920 ，设计稿的宽度 |
| height | `Number`类型，默认值：1080，设计稿的高度  |



