<template>
  <div class="login-container">
    <!-- 头部 -->
    <van-nav-bar title="登录"></van-nav-bar>
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-validate="'required|phone'"
        name="phone"
        :error-message="errors.first('phone')"
        v-model="user.mobile"
        placeholder="请输入手机号"
        label="手机号"
        clearable
      ></van-field>
      <van-field v-model="user.code" placeholder="请输入密码" label="密码"></van-field>
    </van-cell-group>
    <van-button :loading="loading" type="primary" block @click.prevent="handleLogin">登录</van-button>
  </div>
</template>

<script>
import { login } from '@/api/user/index.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      },
      // 是否为加载状态
      loading: false
    }
  },
  created () {},
  methods: {
    ...mapMutations(['setUser']),
    async handleLogin () {
      // 当以点击的时候为加载状态
      this.loading = true
      //   const res = await axios({
      //     method: 'post',
      //     url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
      //     data: this.user
      //   })
      //   const res = await request({
      //     method: 'post',
      //     url: '',
      //     data: this.user
      //   })
      // //   如果成功的话就吧数据储存到localstorage中
      //   console.log(res)
      // 使用login封装的函数发送请求
      try {
        this.$validator.validate().then(async valid => {
          if (valid) {
            const res = await login(this.user)
            console.log(res)
            // 修改vuex中的值并且储存到localstorage中
            this.setUser(res)
            this.$router.push('/')
            // 如果接受到后台相应的token 需要存放到localstorage里
          }
          this.loading = false
        })
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #0096fa;
}
.van-nav-bar__title {
  color: #fff;
}
</style>
