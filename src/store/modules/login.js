import Vue from 'vue'
const Login = {
  namespaced: true,
  state: {
    name: 'Login',
    isShowPopover: false
  },
  getters: {
  },
  mutations: {
    togglePopover (state) {
      /**
       * 切换科室选择弹窗的开关
       * @author zdd update(2017/1/3)
       * */
      state.isShowPopover = !state.isShowPopover
    }
  },
  actions: {
  }
}
export default Login
