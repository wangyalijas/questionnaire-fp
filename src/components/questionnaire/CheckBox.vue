<template>
  <div class="">
    <div class="title"><span class="check lint-height">多选</span>{{value.name}}
    </div>
    <ul>
      <template v-for="(selection, index) in value.options">
        <li :key="index">
          <div class="check-button">
            <i class="iconfont icon-weigouxuan" :class="{'icon-gouxuan_': isSelected(selection.id)}"
               @click="handleClick(selection.id)"></i>
          </div>
          <div class="check-label" @click="handleClick(selection.id)">{{selection.name}}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: Object,
      fatherIndex: Number,
    },
    methods: {
      isSelected(value) {
        return (this.value.result || []).includes(value);
      },
      handleClick(id) {
        this.setValueToItem(id);
      },
      setValueToItem(value) {
        let result;
        result = this.value.result || [];
        if (result.includes(value)) {
          result.splice(result.indexOf(value), 1);
        } else {
          result.push(value);
        }
        this.$set(this.value, 'result', result);
      },
    }
  }
</script>

<style scoped>

</style>
