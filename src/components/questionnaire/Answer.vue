<template>
  <div class="item textarea">

    <div class="title"><span class="other lint-height">[其他]</span>{{value.name}}</div>

    <textarea placeholder="请输入内容" type="textarea" rows="2" autocomplete="off" validateevent="true"
              class="textarea__inner" v-model="value.result"></textarea>

  </div>
</template>

<script>
  export default {
    props: {
      value: Object,
      fatherIndex: Number,
    }
  }
</script>

<style scoped>

</style>
