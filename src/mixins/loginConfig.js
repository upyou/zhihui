
export default {
  data () {},
  methods: {
    login () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '您还未登录，请先登录',
          confirmButtonText: '去登录',
          cancelButtonText: '再看看'
        })
          .then(() => {
            // on confirm
            this.$router.replace({
              path: '/login',
              query: {
                redirect: this.$route.fullPath
              }
            })
          })
          .catch(() => {
            // on cancel
          })
        return true
      }

      return false
    }
  }
}
