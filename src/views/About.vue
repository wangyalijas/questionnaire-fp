<template>
  <div class="about">
    <div class="list-content">
      <template v-for="(item, index) in data">
        <div class="list-item clearfix" :key="index" @click="handleRouter('courseWareDetail', {path: item.path})">
            <div class="list-title">{{item.name}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      this.$nextTick(() => {
        this.getCoursewareList()
      })
    },
    methods: {
      getCoursewareList() {
        let params = {
          questionnaireId: this.$route.query.questionnaireId,
        }
        this.$http(this.$api.getCoursewareList, params).then(({data}) => {
          this.data = data;
        })
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    position: relative;
  }
  .list-content {
    position: absolute;
    left: 0.40rem;
    right: 0.40rem;
    top: 0.53rem;
    min-height: 5.33rem;
    padding-bottom: 0.53rem;
    .list-item {
      height: 2.29rem;
      background: #FFFFFF;
      border: 1px solid rgba(219,223,227,0.30);
      box-shadow: 0 0 9px 0 rgba(225,225,225,0.50);
      border-radius: 4px;
      margin-top: 0.27rem;
        .list-title {
          text-align: left;
          margin-top: 0.45rem;
          margin-left: 0.43rem;
          font-family: PingFangSC-Semibold;
          font-size: 0.48rem;
          color: #000000;
          height: 50%;
        }
    }
  }
</style>
