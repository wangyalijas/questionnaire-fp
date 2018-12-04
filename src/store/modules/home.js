import Vue from "vue";
import homeModule from "../../services/api/home";

const Home = {
  namespaced: true,
  state: {
    name: 'Home',

  },
  getters: {
  },
  mutations: {
  },
  actions: {
    fetchDictionaries ({commit}, strIds = []) {
      /**
       * 请求字典列表数据
       * @param {Array} data
       * @param {Array} strId 字典ID
       * @author wyl update(1/5)
       */
      let data = {
        data: strIds.map(id => {
          return {strID: id}
        })
      }
      Vue.$http($api.homeModule.getQuestionnaireList, data).then(({data}) => {

      })
    }
  }
}
export default Home
