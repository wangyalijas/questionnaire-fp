<template>
  <div class="item">
    <div class="title"><span class="check lint-height">单选</span>{{value.name}}
    </div>
    <ul>
      <template v-for="(selection, index) in item.options">
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
        return this.value.result === value;
      },
      handleClick(id) {
        this.setValueToItem(id);
      },
      setValueToItem(value) {
        let result;
        result = value;
        this.$set(item, 'result', result);
      },
    }
  }
</script>

<style scoped>

</style>
