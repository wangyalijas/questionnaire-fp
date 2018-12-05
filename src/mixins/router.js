export default {
  methods: {
    handleRouter(name, query= {}, params = {}) {
      this.$router.push({
        name: name,
        params: params,
        query: query
      })
    }
  }
}
