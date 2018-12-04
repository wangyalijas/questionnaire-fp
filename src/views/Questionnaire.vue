<template>
  <div class="questionnaire">
    <div class="background">
      <img src="../../public/img/fill.svg" alt="" class="fill">
      <div class="bg-button" @click="handleRouter('about')">
        <span class="bg-left">
          <img src="../../public/img/class.svg" alt="">
        </span>
        <span class="bg-right">课件浏览</span>
      </div>
      <div class="bg-title">{{currentNumber}}/{{totalNumber}}</div>
    </div>
    <div class="questionnaire-content">
      <template v-for="(item, index) in data">
        <component
          :key="index"
          :is="getModelName(item)"
          :fatherIndex="index + 1"
          v-model="data[index]"
          @writing="handleWriting(index)"
          ref="models">
        </component>
      </template>
      <div class="button" @click="handleRouter('home')">提交</div>
    </div>
  </div>
</template>

<script>
import deserialize from '../utils/deserialize';
import Models from '../components/questionnaire/models';

export default {
  name: 'questionnaire',
  data() {
    return {
      result: {
        answers: [],
        selections: [],
      },
      data: [],
      currentNumber: 0,
    };
  },
  computed: {
    totalNumber() {
      return this.data.length;
    },
  },
  created() {
    this.$nextTick(() => {
      this.getQuestionnaire();
    });
  },
  methods: {
    getQuestionnaire() {
      const params = {
        questionnaireId: this.$route.params.questionnaireId,
      };
      this.$http(this.$api.getQuestionnaire, params).then(({ data }) => {
        this.data = this.deserialize(data);
      });
    },
    deserialize(data) {
      return deserialize(data);
    },
    getModelName(data) {
      return `${data.type}Model`;
    },
    handleWriting(index) {
      if (!this.$refs.models) {
        return;
      }
      this.$refs
        .models
        .slice(0, index + 1)
        .forEach((component) => {
          component.validate();
        });
      this.updateCurrentNumber(index + 1);
    },
    updateCurrentNumber(number) {
      this.currentNumber = this.currentNumber < number ? number : this.currentNumber;
    },
  },
  components: { ...Models },
};
</script>

<style lang="scss">
  .icon-weigouxuan:before {
    font-family: iconfont;
    content: "\e623";
    font-size: 0.51rem;
    transition: .1s;
    color: #E7E7E7;
  }
  .icon-gouxuan_:before {
    font-family: iconfont;
    content: "\e630";
    font-size: 0.51rem;
    transition: .1s;
    color: #2660F7;
  }
  .questionnaire {
    .background {
      height: 7.23rem;
      position: relative;
      background-color: #234AF4;
      .fill {
        position: absolute;
        top: 1.07rem;
        right: 0.67rem;
      }
      .bg-button {
        width: 2.72rem;
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
          border-radius: 50%;
          position: absolute;
          padding: 0.13rem;
          /*background-color: rgb(223, 232, 255);*/
          background-color: #6C8DFF;
          left: 0;
          img {
            display: inline-flex;
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
              .iconfont {
                font-size: 0.51rem;
                transition: .2s;
                &.icon-gouxuan_ {
                  color: #2660F7;
                }
              }
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
          border: 0.03rem solid rgba(219, 223, 227, 0.30);
          box-shadow: 0 0 0.24rem 0 rgba(225, 225, 225, 0.50);
          font-family: PingFangSC-Regular;
          font-size: 0.40rem;
          color: #0F0F0F;
          padding: 0.27rem;
          outline: none !important;
        }
      }
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
  }
</style>
