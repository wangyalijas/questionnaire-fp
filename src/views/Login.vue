<template>
  <div class="login">
    <div class="input">
      <span class="input-suffix">
        <img src="../../public/img/group.svg" alt="">
      </span>
      <input type="text" placeholder="请输入姓名" class="input-inner">
    </div>
    <div class="input">
      <span class="input-suffix">
        <img src="../../public/img/number.svg" alt="" class="number">
      </span>
      <input type="text" placeholder="请输入工号" class="input-inner">
    </div>
    <div class="input">
      <span class="input-suffix">
        <img src="../../public/img/area.svg" alt="" class="area">
      </span>
      <input type="text" placeholder="请输入工作地" class="input-inner">
    </div>
    <div class="button" @click="handleRouter('home')">登录</div>
  </div>
</template>

<script>
  export default {
    name: 'login',
  }
</script>

<style scoped lang="scss">
  .login {
    padding: 1.52rem 0.53rem;
    display: inline-block;
    /*justify-items: center;*/
  }
  .input {
    width: 8.93rem;
    height: 1.17rem;
    margin-top: 0.53rem;
    position: relative;
  }
  .input-inner {
    font-size: 0.37rem;
    width: 8.93rem;
    height: 1.17rem;
    padding-left: 0.80rem;
    border: 0.03rem solid #DFDFDD;
    border-radius: 0.11rem;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    line-height: 1;
    outline: none;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
  .input-suffix {
    width: 0.53rem;
    height: 0.27rem;
    position: absolute;
    height: 100%;
    left: 0.13rem;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
    img {
      width: 0.4rem;
      margin-top: 0.36rem;
    }
    .number {
      margin-top: 0.45rem;
    }
    .area {
    }
  }
  .button {
    margin-top: 0.83rem;
    margin-bottom: 0.83rem;
    width: 8.93rem;
    height: 1.17rem;
    line-height: 1.17rem;
    background: #2660F7;
    font-family: PingFangTC-Regular;
    font-size: 0.48rem;
    color: $--color-text-primary;
    border-radius: 0.59rem;
  }
</style>
