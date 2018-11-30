<template>
  <div class="home">
      <div class="background">
      </div>
      <div class="list-content">
        <div class="list-item clearfix">
          <div class="list-left">
            <div class="list-title">认识卫宁</div>
            <div class="list-title-small">认识卫宁认识卫宁</div>
          </div>
          <div class="list-right">
            <div class="button" @click="handleRouter('questionnaire')">参与考核</div>
          </div>
        </div>
        <div class="list-item clearfix">
          <div class="list-left">
            <div class="list-title">个人兴趣爱好</div>
            <div class="list-title-small">让我们更了解你</div>
          </div>
          <div class="list-right">
            <div class="button" @click="handleRouter('hobby')">参与考核</div>
          </div>
        </div>
        <div class="list-item clearfix">
          <div class="list-left">
            <div class="list-title">认识卫宁</div>
            <div class="list-title-small">认识卫宁认识卫宁</div>
          </div>
          <div class="list-right">
            <div class="button" @click="handleRouter('questionnaire')">参与考核</div>
          </div>
        </div>
        <div class="list-item clearfix">
          <div class="list-left">
            <div class="list-title">认识卫宁</div>
            <div class="list-title-small">认识卫宁认识卫宁</div>
          </div>
          <div class="list-right">
            <div class="button" @click="handleRouter('questionnaire')">参与考核</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    .background {
      display: inline-flex;
      width: 100%;
      height: 7.23rem;
      background: url("../../public/img/banner.png");
      background-size: 100%;
    }
    .list-content {
      position: absolute;
      left: 0.40rem;
      right: 0.40rem;
      top: 6.19rem;
      min-height: 5.33rem;
      padding-bottom: 0.53rem;
      .list-item {
        height: 2.29rem;
        background: #FFFFFF;
        border: 1px solid rgba(219,223,227,0.30);
        box-shadow: 0 0 9px 0 rgba(225,225,225,0.50);
        border-radius: 4px;
        margin-top: 0.27rem;
        .list-left {
          float: left;
          .list-title {
            text-align: left;
            margin-top: 0.45rem;
            margin-left: 0.43rem;
            font-family: PingFangSC-Semibold;
            font-size: 0.48rem;
            color: #000000;
            height: 50%;
          }
          .list-title-small {
            margin-top: 0.16rem;
            margin-left: 0.43rem;
            opacity: 0.5;
            font-family: PingFangSC-Semibold;
            font-size: 0.37rem;
            color: #000000;
          }
        }
        .list-right {
          float: right;
          .button {
            width: 2.67rem;
            height: 1.01rem;
            line-height: 1.01rem;
            margin-top: 0.61rem;
            margin-right: 0.29rem;
            background: #2660F7;
            font-family: PingFangTC-Regular;
            font-size: 0.48rem;
            color: $--color-text-primary;
            border-radius: 0.51rem;
          }
        }
      }
    }
  }
</style>
