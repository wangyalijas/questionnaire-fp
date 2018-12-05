<template>
  <div class="login">
    <div class="input">
      <span class="input-suffix">
        <img src="../../public/img/group.svg" alt="">
      </span>
      <input
        type="text"
        placeholder="请输入姓名"
        :class="['input-inner', {'error': isNoName}]"
        v-model="form.name"
        @input="clearValidationClasses('name')">
    </div>
    <div class="input">
      <span class="input-suffix">
        <img src="../../public/img/number.svg" alt="" class="number">
      </span>
      <input
        type="text"
        placeholder="请输入工号"
        :class="['input-inner', {'error': isNoUserNo}]"
        v-model="form.userNo"
        @input="clearValidationClasses('userNo')">
    </div>
    <div class="input">
      <span class="input-suffix">
        <img src="../../public/img/area.svg" alt="" class="area">
      </span>
      <input
        type="text"
        placeholder="请输入工作地"
        :class="['input-inner']"
        v-model="form.department">
    </div>
    <div class="button" @click="postLogin()">登录</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: '',
        userNo: '',
        department: '',
      },
      isNoName: false,
      isNoUserNo: false,
    }
  },
  methods: {
    validate() {
      if (!this.isChecked('name')) {
        // 在这里设置输入框变红的样式
        this.isNoName = true;
        return false;
      }
      if (!this.isChecked('userNo')) {
        // 在这里设置输入框变红的样式
        this.isNoUserNo = true;
        return false;
      }
      return true;
    },
    isChecked(label) {
      return !!this.form[label]
    },
    clearValidationClasses(name) {
      if (this.isChecked(name)) {
        if (name === 'name') {
          this.isNoName = false;
        } else {
          this.isNoUserNo = false;
        }
      }
    },
    postLogin() {
      if(this.validate()) {
        const params = this.form;
        this.$http(this.$api.postLogin, params).then(({data}) => {
          if (data.userNo) {
            this.$store.commit('setUserInfo', data);
            return this.handleRouter('home');
          }
          return false
        });
      }
    },
  }
};
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
  .error {
    border: 0.03rem solid rgba(255, 0, 0, 0.3) !important;
    box-shadow: 0 0 9px 0 rgba(255, 0, 0, 0.3) !important;
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
