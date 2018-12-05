<template>
  <div :class="['item', 'textarea', {'is-error': isError}]">

    <div class="title"><span class="other lint-height">[其他]</span>{{value.name}}</div>

    <textarea
      placeholder="请输入内容"
      rows="2"
      autocomplete="off"
      class="textarea__inner"
      v-model="value.result"
      @input="clearValidationClasses"
    ></textarea>

  </div>
</template>

<script>
import EventsMixin from './events_mixin';

export default {
  props: {
    value: Object,
    fatherIndex: Number,
  },
  data() {
    return {
      isError: false,
    };
  },
  computed: {
  },
  methods: {
    validate() {
      if (!this.value.result) {
        this.isError = true;
        return false;
      }

      return true;
    },
    clearValidationClasses() {
      if (this.value.result) {
        this.isError = false;
      }
    },
  },
  mixins: [EventsMixin],
};
</script>

<style scoped lang="scss">
.is-error {
  .textarea__inner {
    border: 0.03rem solid rgba(255, 0, 0, 0.3) !important;
  }
}
</style>
