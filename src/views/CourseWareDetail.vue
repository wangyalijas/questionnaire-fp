<template>
  <div class="course-ware">
    <!--{{currentPage}} / {{pageCount}}-->
    <!--<pdf-->
    <!--v-if="src"-->
    <!--:src="baseUrl"-->
    <!--@num-pages="pageCount = $event"-->
    <!--@page-loaded="currentPage = $event"-->
    <!--@progress="progress = $event"></pdf>-->
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
    ></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'courseWareDetail',
    data() {
      return {
        // src: loadingTask,
        // currentPage: 0,
        // pageCount: 0,
        // progress: 0,
        src: null,
        numPages: undefined,
      }
    },
    watch: {
    },
    computed: {
      // baseUrl() {
      //   return window.config.baseUrl + '/static/courseware/pdf/' + this.$route.query.path;
      // },
    },
    created() {
      this.src = pdf.createLoadingTask(`${window.config.baseUrl}/static/courseware/pdf/${this.$route.query.path}`);
      // this.$nextTick(() => {
      //   this.src = this.$route.query.path;
      // });
    },
    methods: {
    },
    beforeMount() {
      this.src.then(pdf => {
        this.numPages = pdf.numPages;
      });
    },
    components: {
      pdf
    }
  }
</script>
