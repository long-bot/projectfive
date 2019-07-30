<template>
  <div class="home-container">
    <van-nav-bar title="首页" fixed></van-nav-bar>
    <!-- 列表 -->
    <van-tabs class="channel-tab" v-model="activeTab" >
      <van-tab :title="item.name" v-for="item in channel" :key="item.id" >
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list error-text="请求失败，点击重新加载" :finished="finished" finished-text="没有更多了">
            <van-cell v-for="item in 20" :title="item" :key="item"></van-cell>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!-- <van-tab title="2">聂荣</van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
import { getChnnelOrDefault } from '@/api/channel.js'
export default {
  data () {
    return {
      // 内容导航栏
      activeTab: 0,
      finished: false,
      //   下拉刷新
      isLoading: false,
      //   频道列表
      channel: []
    }
  },
  created () {
    this.getChannel()
  },
  methods: {
    //   获取频道列表
    async getChannel () {
      const res = await getChnnelOrDefault()
      console.log(res)
      this.channel = res.channels
    },
    //   当下拉的时候执行
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 400)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #0096fa;
}
.van-nav-bar__title {
  color: #fff;
}
.van-tabs__wrap{
    margin-top: 100px
}
.channel-tab {
    margin-top :92px;
    margin-bottom: 92px;
}
</style>
