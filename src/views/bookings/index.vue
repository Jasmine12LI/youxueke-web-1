<template>
  <div>
  <course-list :course-list="courseData"></course-list>
  <P>预约界面</P>
</div>
</template>

<script>
  import courseList from '@/components/course-list'

  import utils from '@/utils'
  import { mapState } from 'vuex'

  export default {
    name: "index",
    components: { courseList },
    computed: {
      ...mapState([
        'stuId'
      ])
    },
    data: () => ({
      courseData: []
    }),
    mounted () {
      utils.request({
        invoke: utils.api.findBook,
        params: {
          stuId: this.stuId
        }
      })
        .then(res => {
          this.courseData = res.Course
        })
    }
  }
</script>

<style scoped>

</style>
