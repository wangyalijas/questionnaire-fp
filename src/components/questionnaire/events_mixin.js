export default {
  watch: {
    'value.result': function (val) {
      if (val) {
        this.$emit('writing');
      }
    },
  },
};
