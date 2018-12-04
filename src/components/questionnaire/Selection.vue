<template>
  <div class="item">
    <div class="title"><span class="check lint-height">[单选]</span>{{value.name}}
    </div>
    <ul>
      <template v-for="(selection, index) in value.options">
        <li :key="index" :class="selection.class">
          <div class="check-button">
            <i class="iconfont icon-weigouxuan" :class="{'icon-gouxuan_': isChecked(selection)}"
               @click="handleClick(selection)"></i>
          </div>
          <div class="check-label" @click="handleClick(selection)">{{selection.name}}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import EventsMixin from './events_mixin';

export default {
  props: {
    value: Object,
    fatherIndex: Number,
  },
  methods: {
    isChecked(value) {
      return this.value.result === (typeof value === 'object' ? value.id : value);
    },
    handleClick(option) {
      this.setValueToItem(option.id);
      this.clearValidationClasses(option);
    },
    setValueToItem(value) {
      const result = value;
      this.$set(this.value, 'result', result);
    },
    validate() {
      this.value.options.map((item) => {
        if (item.isRight && !this.isChecked(item)) {
          return this.$set(item, 'class', 'success-error');
        }
        if (!item.isRight && this.isChecked(item)) {
          this.$set(item, 'class', 'error');
        }
      });
    },
    clearValidationClasses(option) {
      if (option.isRight && this.isChecked(option)) {
        this.value.options.map(item => (
          this.$set(item, 'class', 'normal')
        ));
      }
    },
  },
  mixins: [EventsMixin],
};
</script>

<style scoped>
  .success-error {
    border: 0.03rem solid rgba(0, 255, 0, 0.3) !important;
    box-shadow: 0 0 9px 0 rgba(0, 255, 0, 0.5) !important;
  }

  .error {
    border: 0.03rem solid rgba(255, 0, 0, 0.3) !important;
    box-shadow: 0 0 9px 0 rgba(255, 0, 0, 0.3) !important;
  }
</style>
