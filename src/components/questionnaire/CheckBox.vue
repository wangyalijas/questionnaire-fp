<template>
  <div class="item">
    <div class="title"><span class="check lint-height">[多选]</span>{{value.name}}
    </div>
    <ul>
      <template v-for="(option, index) in value.options">
        <li :key="index" :class="option.class">
          <div class="check-button">
            <i class="iconfont icon-weigouxuan" :class="{'icon-gouxuan_': isChecked(option)}"
               @click="handleClick(option)"></i>
          </div>
          <div class="check-label" @click="handleClick(option)">{{option.name}}</div>
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
      return (this.value.result || []).includes((typeof value === 'object' ? value.id : value));
    },
    handleClick(option) {
      this.setValueToItem(option.id);
      this.clearValidationClasses(option);
    },
    setValueToItem(value) {
      const result = this.value.result || [];
      if (result.includes(value)) {
        result.splice(result.indexOf(value), 1);
      } else {
        result.push(value);
      }
      this.$set(this.value, 'result', result);
    },
    validate() {
      this.value.options.map((item) => {
        if (item.isRight && !this.isChecked(item)) {
          this.$set(item, 'class', 'success-error');
          return false
        }
        if (!item.isRight && this.isChecked(item)) {
          this.$set(item, 'class', 'error');
          return false
        }
      });
    },
    clearValidationClasses(option) {
      if ((option.isRight && this.isChecked(option)) || (!option.isRight && !this.isChecked(option))) {
        this.$set(option, 'class', 'normal');
      }
    },
  },
  mixins: [EventsMixin],
};
</script>

<style scoped lang="scss">
  .success-error {
    border: 0.03rem solid rgba(0, 255, 0, 0.3) !important;
    box-shadow: 0 0 9px 0 rgba(0, 255, 0, 0.5) !important;
  }
  .error {
    border: 0.03rem solid rgba(255, 0, 0, 0.3) !important;
    box-shadow: 0 0 9px 0 rgba(255, 0, 0, 0.3)!important;
  }
</style>
