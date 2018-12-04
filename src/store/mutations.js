import Vue from 'vue'
export default {
  /**
   * 清除tab足迹
   * @author wyl  update (2017/12/27))
   */
  emptySummary (state, data = []) {
    Vue.set(state, 'pathSummary', data)
  }
}
