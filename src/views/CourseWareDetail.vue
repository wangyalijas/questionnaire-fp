<template>
  <div class="course-ware">
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
        src: null,
        numPages: undefined,
      }
    },
    watch: {
    },
    computed: {
    },
    created() {
      this.src = pdf.createLoadingTask(`${window.config.baseUrl}/static/courseware/pdf/${this.$route.query.path}`);
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
