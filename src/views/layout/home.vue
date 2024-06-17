<template>
  <div>
    <van-nav-bar title="智慧商城"/>
    <van-search placeholder="请输入搜索关键词" @click="$router.push('/search')" />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banList" :key="index">
          <img :src= item.imgUrl>
        </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="5">
      <van-grid-item v-for="(value,index) in gridist" :key="index" :icon=value.imgUrl :text=value.text />
    </van-grid>
    <img src="../../assets/main.png" alt="">
    <div class="guess">
      <p>———— 猜你喜欢 ————</p>
      <GuessIndes v-for="(item, index) in goessList" :key="index" :item="item"></GuessIndes>
      <div class="van-divider">
      <p>没有更多了</p>
    </div>
    </div>

  </div>
</template>

<script>
import GuessIndes from '@/components/GuessIndes.vue'
import { getGuessList } from '@/api/home.js'
export default {
  name: 'HomeIndex',
  data () {
    return {
      banList: [],
      gridist: [],
      goessList: []

    }
  },
  components: {
    GuessIndes
  },
  async created () {
    const { data: { pageData } } = await getGuessList()
    this.banList = pageData.items[1].data
    this.gridist = pageData.items[3].data
    this.goessList = pageData.items[6].data
  }
}
</script>

<style lang="less" scoped>
  .van-nav-bar {
  background-color: red ;
  ::v-deep .van-nav-bar__title{
    color: #fff !important;
  }
  }

.van-search {
  .van-search__content{
    border-radius: 20px;
  }
}
.my-swipe {
  img{
    height: 200px;
    width: 100%;
  }
}

.van-grid{
  ::v-deep .van-grid-item__content{
    height: 70px;
    margin-bottom: 20px;
  }
  img{
    margin-left: 5px;
    width: 40px;
  }
  p{
    margin-top: 8px;
    font-size: 12px;
    color: #4c5350;
  }
}

img{
  width: 100%;
}

.guess{
  height: 500px;
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  background-color: #f2f2f2;
  p{
    text-align: center;
    margin-bottom: 20px;
  }
}
.van-divider{
  height: 80px;
  color: #d7d7d7
}
</style>
