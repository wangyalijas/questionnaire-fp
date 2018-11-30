<template>
  <div class="questionnaire">
    <div class="background">
      <div class="bg-button">
        <span class="bg-left"  @click="handleRouter('about')">
          <img src="../../public/img/class.svg" alt="">
        </span>
        <span class="bg-right">让我们更了解你</span>
      </div>
    </div>
    <div class="questionnaire-content">
      <div class="item">
        <div class="title">您平时喜欢做些什么呢</div>
        <textarea placeholder="喜欢的游戏，喜欢的书..." type="textarea" rows="2" autocomplete="off" validateevent="true"
                  class="textarea__inner"></textarea>
      </div>
      <div class="item textarea">
        <div class="title">您平时喜欢做些什么呢</div>
        <textarea placeholder="喜欢的游戏，喜欢的书..." type="textarea" rows="2" autocomplete="off" validateevent="true"
                  class="textarea__inner"></textarea>
        <div class="button" @click="handleRouter('home')">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hobby'
  }
</script>

<style lang="scss" scoped>
  .questionnaire {
    .background {
      height: 7.23rem;
      background-color: #234AF4;
      position: relative;
      .bg-button {
        width: 4rem;
        height: 1rem;
        line-height: 1rem;
        position: absolute;
        top: 0.56rem;
        left: 0.43rem;
        padding-left: 0.7rem;
        border-radius: 33px;
        font-family: PingFangSC-Regular;
        font-size: 0.48rem;
        color: #FFFFFF;
        background: rgb(43, 90, 255);
        .bg-left {
          width: 0.71rem;
          height: 0.71rem;
          opacity: 0.36;
          border-radius: 50%;
          position: absolute;
          padding: 0.13rem;
          left: 0;
          background: rgb(223,232,255);
          img {
            width: 100%;
            height: 100%;
            z-index: 10000;
          }
        }
        .bg-right {
        }
      }
      .bg-title {
        font-family: PingFangSC-Regular;
        font-size: 0.43rem;
        color: #FFFFFF;
        position: absolute;
        top: 0.77rem;
        right: 0.43rem;
      }
    }
    .questionnaire-content {
      position: absolute;
      border-radius: 0.53rem;
      top: 2.19rem;
      left: 0;
      right: 0;
      background: #FFFFFF;
      min-height: 6rem;
      .item {
        padding: 0.43rem 0.80rem;
        /*&.textarea {*/
          /*position: fixed;*/
        /*}*/
        .title {
          font-family: PingFangSC-Medium;
          font-size: 0.48rem;
          color: #000000;
          line-height: 0.67rem;
          text-align: left;
          margin-bottom: 0.51rem;
          .lint-height {
            margin-right: 0.27rem;
          }
          .check {
            color: #256BFF;
          }
          .other {
            color: #787878;
          }
        }
        ul {
          li {
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            height: 1.17rem;
            background: #FFFFFF;
            border: 0.03rem solid rgba(219, 223, 227, 0.30);
            box-shadow: 0 0 9px 0 rgba(225, 225, 225, 0.50);
            margin-bottom: 0.13rem;
            .check-button {
              width: 1rem;
              display: flex;
              align-items: center;
              justify-items: center;
              margin-left: 0.27rem;
            }
            .check-label {
              height: 100%;
              width: calc(100% - 1rem);
              display: flex;
              align-items: center;
              text-align: left;
              color: #0F0F0F;
            }
          }
        }
        .textarea__inner {
          width: calc(100% - 0.54rem);
          min-height: 3.52rem;
          background: #FFFFFF;
          border: 0.03rem solid rgba(219,223,227,0.30);
          box-shadow: 0 0 0.24rem 0 rgba(225,225,225,0.50);
          font-family: PingFangSC-Regular;
          font-size: 0.40rem;
          color: #0F0F0F;
          padding: 0.27rem;
          outline: none!important;
        }
      }
    }
    .button {
      margin: 0.83rem auto 0.83rem;
      width: 8.93rem;
      height: 1.17rem;
      line-height: 1.17rem;
      background: #2660F7;
      font-family: PingFangTC-Regular;
      font-size: 0.48rem;
      color: $--color-text-primary;
      border-radius: 0.59rem;
    }
  }
</style>
