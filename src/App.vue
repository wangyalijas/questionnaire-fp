<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
  @font-face {font-family: "iconfont";
    src: url('../public/iconfont/iconfont.eot'); /* IE9*/
    src: url('../public/iconfont/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../public/iconfont/iconfont.woff') format('woff'), /* chrome, firefox */
    url('../public/iconfont/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('../public/iconfont/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
