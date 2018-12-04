export default {
  methods: {
    handleRouter(name, params = {}) {
      this.$router.push({
        name: name,
        params: params
      })
    }
  }
}
