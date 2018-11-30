<template>
  <div class="questionnaire">
    <div class="background">
      <div class="bg-button">
        <span class="bg-left"  @click="handleRouter('about')">
          <img src="../../public/img/class.svg" alt="">
        </span>
        <span class="bg-right">课件浏览</span>
      </div>
      <div class="bg-title">0/5</div>
    </div>
    <div class="questionnaire-content">
      <template v-for="(item, index1) in lists">
        <div class="item" :key="index1">
          <div class="title"><span class="check lint-height">[{{item.type=='radio' ? '单选' : '多选'}}]</span>{{item.title}}</div>
          <ul>
            <template v-for="(selection, index2) in item.selections">
              <li :key="index2">
                <div class="check-button">
                  <i class="iconfont icon-weigouxuan" :class="{'icon-gouxuan_': isSelected(item, selection.id)}"
                  @click="handleClick(selection.id, index1)"></i>
                </div>
                <div class="check-label" @click="handleClick(selection.id, index1)">{{selection.label}}</div>
              </li>
            </template>
          </ul>
        </div>
      </template>
      <div class="item textarea">
        <div class="title"><span class="other lint-height">[其他]</span>写给公司的话</div>
        <textarea placeholder="请输入内容" type="textarea" rows="2" autocomplete="off" validateevent="true"
                  class="textarea__inner"></textarea>
        <div class="button" @click="handleRouter('home')">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'questionnaire',
    data () {
      return {
        lists: [
          {
            index: 0,
            type: 'radio',
            title: ' 公司初建于（      ）年',
            selections: [
              {
                label: 'A：1993',
                id: 1,
              },
              {
                label: 'B：1994',
                id: 2,
              },
              {
                label: 'C：2000',
                id: 3,
              },
              {
                label: 'D：2001',
                id: 4,
              }
            ],
            result: '',
          },
          {
            index: 1,
            type: 'check-box',
            title: ' 公司初建于（      ）年',
            selections: [
              {
                label: 'A：1993',
                id: 1,
              },
              {
                label: 'B：1994',
                id: 2,
              },
              {
                label: 'C：2000',
                id: 3,
              },
              {
                label: 'D：2001',
                id: 4,
              }
            ]
          }
        ],
        result: {
          answers: [],
          selections: [],
        }
      }
    },
    methods: {
      handleClick(id, index) {
        this.setValueToItem(this.lists[index], id);
        console.log(this.lists[index].result);
      },
      setValueToItem(item, value) {
        let result;

        switch (item.type) {
          case 'check-box' :
            result = item.result || [];
            if (result.includes(value)) {
              result.splice(result.indexOf(value), 1);
            } else {
              result.push(value);
            }
            break;
          default:
            result = value;
            break;
        }

        this.$set(item, 'result', result);
      },
      isSelected(item, value) {
        console.log(item, value);
        switch (item.type) {
          case 'check-box':
            return (item.result || []).includes(value);
          default:
            return item.result === value;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .questionnaire {
    .background {
      height: 7.23rem;
      position: relative;
      background-color: #234AF4;
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
          opacity: 0.36;
          border-radius: 50%;
          position: absolute;
          padding: 0.13rem;
          background: rgb(223,232,255);
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
        &.textarea {
          /*position: fixed;*/
        }
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
