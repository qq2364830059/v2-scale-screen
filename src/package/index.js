/*
    require.context(arg1,arg2,arg3)
        arg1 - 读取文件的路径
        arg2 - 是否遍历文件的子目录
        arg3 - 匹配文件的正则
        关于这个Api的用法，可以去查阅一下，用途也比较广泛
*/


//引入当前文件里面的所有子文件以 .vue结尾的文件。  require.content() 是 Webpack API （引入文件）
const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  //判断是否存在，存在说明走过下面的代码，就不用走了。
  if (install.installed) return
  install.installed
  // requireComponent.keys() 是个数组，里面是各文件的当前路径 如：'./button/el-button.vue'
  requireComponent.keys().forEach(item => {
    const config = requireComponent(item)
    const componentName = config.default.name  //拿到vue组件中的export default 的 name属性，所以我们在使用组件的时候一定要定义 name值，且唯一。如： name:'el-button'
    Vue.component(componentName, config.default || config) //注册组件，第一个参数为组件名，第二个参数为导出组件的内容，（动态注册该目录下的所有组件）
  })
}

//适用于所有vue项目  环境检测，node中没有window
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}