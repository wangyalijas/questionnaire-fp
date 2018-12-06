<template>
  <div class="course-ware">
    {{currentPage}} / {{pageCount}}
    <pdf
    v-if="src"
    :src="baseUrl"
    @num-pages="pageCount = $event"
    @page-loaded="currentPage = $event"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'courseWareDetail',
    data() {
      return {
        src: '',
        currentPage: 0,
        pageCount: 0,
      }
    },
    computed: {
      baseUrl() {
        return window.config.baseUrl + '/static/courseware/pdf/' + this.$route.query.path;
      },
    },
    created() {
      this.src = this.$route.query.path;
    },
    components: {
      pdf
    }
  }
</script>
