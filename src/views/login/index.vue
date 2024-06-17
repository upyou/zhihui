<template>
  <div>
    <div>
    <van-nav-bar title="会员登陆" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
  </div>
  <div class="body">
    <div>
          <h1>手机号登录</h1>
          <p>未注册的手机号登陆后将自动注册并绑定手机号</p>
    </div>
        <div>
          <input v-model="phone" type="text" name="" id="" placeholder="请输入手机号">
        </div>

        <div class="code">
          <input v-model="PicCode" type="text" placeholder="请输入图形验证码">
          <img v-if="PicUrl" :src=PicUrl alt="" @click="getPicCode()"></div>
        <div class="code">
          <input v-model="code" type="text" placeholder="请输入短信验证码">
          <a href="#" @click="getCode()">{{ second === totalSecond ? '获取验证码' : second + '秒后获取' }}</a>
        </div>
        <button @click="loginFn()" type="submit" class="submit">登陆</button>
  </div>

  </div>

</template>

<script>
import { getPicCode, getPhone, login } from '@/api/login'
export default {
  data () {
    return {
      PicCode: '',
      PicUrl: '',
      PicKey: '',
      second: 60,
      totalSecond: 60,
      timer: null,
      phone: '',
      code: ''
    }
  },
  name: 'LoginIndex',
  created () {
    this.getPicCode()
  },
  methods: {
    async  getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      this.PicUrl = base64
      this.PicKey = key
    },
    validFn () {
      if (!/^1[34578]\d{9}$/.test(this.phone)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^[a-zA-Z0-9]{4}$/.test(this.PicCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    async getCode () {
      if (!this.validFn()) { return }
      if (!this.timer && this.second === this.totalSecond) {
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            this.second = this.totalSecond
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
        await getPhone(this.PicCode, this.PicKey, this.phone)
        this.$toast('验证码已发送')
      }
    },
    async loginFn () {
      if (!this.validFn()) return
      if (!/^[0-9]{6}$/.test(this.code)) {
        this.$toast('请输入正确的短信验证码')
        return
      }
      this.$toast('登陆成功')
      const re = await login(this.phone, this.code)
      this.$store.commit('user/setUserInfo', re.data)
      console.log(re)
      const url = this.$route.query.redirect || '/'
      this.$router.replace(url)
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  padding: 20px;
  margin-top: 50px;
}
p{
  margin-top: 10px;
  color: #CCC;
}
  input{
    display: block;
    border: none;
    margin-top: 40px;
    height: 50px;
    width: 100%;
    line-height: 50px;
  }
  .submit{
    width: 100%;
    height: 50px;
    background-color: #f6ad2c;
    color: #FFF;
    border: none;
    border-radius: 30px;
    margin-top: 50px;
  }
  .code{
    display: flex;
    img{
      width: 100px;
      align-self: flex-end;
      margin-bottom: 10px;
    }
    a{
      display: block;
      width: 100px;
      align-self: flex-end;
      color: #f6ad2c;
      border-bottom: none;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
