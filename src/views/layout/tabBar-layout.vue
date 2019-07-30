<template>
    <div class="tabBar-container">
        <!-- 中间组件 -->
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
