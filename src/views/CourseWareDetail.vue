<template>
  <div class="course-ware">
    <pdf v-if="src" :src="baseUrl"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'courseWareDetail',
    data() {
      return {
        src: '',
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
