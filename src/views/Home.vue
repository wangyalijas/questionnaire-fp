<template>
  <div class="home">
      <div class="background">
      </div>
      <div class="list-content">
      <template v-for="(item, index) in data">
        <div class="list-item clearfix" :key="index">
          <div class="list-left">
            <div class="list-title">{{item.name}}</div>
            <div class="list-title-small">{{item.describe}}</div>
          </div>
          <div class="list-right">
            <div :class="['button', {'is-checked': item.isChecked}]" @click="isJump(item)">参与考核</div>
          </div>
        </div>
      </template>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      data: []
    }
  },
  components: {
  },
  computed: {
    ...mapGetters({
      'userInfo': 'handleUserInfo'
    })
  },
  created() {
    this.$nextTick(() => {
      this.getQuestionnaireList()
    })
  },
  methods: {
    isJump(item) {
      if(!item.isChecked) {
        this.handleRouter( item.isHobby ? 'hobby' : 'questionnaire', {questionnaireId: item.GUID})
      }
    },
    getQuestionnaireList() {
      let params = {
        userNo: this.userInfo.userNo
      }
      this.$http(this.$api.getQuestionnaireList, params).then(({data}) => {
        this.data = data;
      })
    }
  }
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
            &.is-checked {
              background: #F2F2F2;
              color: #B1B1B1;
            }
          }
        }
      }
    }
  }
</style>
