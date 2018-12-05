<template>
  <div class="success">
    <div>
      <div class="icon-content"><i class="icon-gouxuan_ iconfont"></i></div>
      <div class="label-content"><span class="icon-label">操作成功</span></div>
      <div class="button-content">
        <div class="button" @click="handleRouter('home')">返回首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped lang="scss">
  .icon-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 8.00rem;
    .icon-gouxuan_ {
      font-size: 2.67rem;
      color: #09BB09!important;
      display: flex;
    }
  }
  .label-conetnt {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-label {
      font-size: 0.80rem;
    }
  }
  .button-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button {
    margin: 0.83rem auto 0.83rem;
    width: 8.53rem;
    height: 1.17rem;
    line-height: 1.17rem;
    background: #2660F7;
    font-family: PingFangTC-Regular;
    font-size: 0.48rem;
    color: $--color-text-primary;
    border-radius: 0.59rem;
  }
</style>
