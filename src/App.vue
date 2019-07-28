<template>
    <div class="app-container">
        ppppp

        {{this.$store.state.name}}
            <hr>
        {{gender}}
            <hr>
        {{age}}
        <hr>
        {{name}}
            <hr>
        <van-button type="primary" @click="setName('这是app里传入 参数','123')">按钮</van-button>
        <van-button type="primary" @click="fff">按钮2222</van-button>
      <p></p>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['name', 'gender', 'age'])
  },
  methods: {
    // setName (data, num) {
    //   this.$store.commit('setName', data)
    // }
    ...mapMutations(['setName']),
    fff () {
      this.$store.dispatch('fn')
    }
  }
}
</script>

<style lang="less" scoped>
p{
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
</style>
