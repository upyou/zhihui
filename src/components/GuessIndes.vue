<template>
  <div v-if="item.goods_id" class="guess-index" @click="$router.push(`/prodetail/${item.goods_id}`)">
    <div class="left">
      <img :src="item.goods_image">
    </div>
      <div class="right">
          <p class="tit text-ellipsis-2">
            {{item.goods_name}}
          </p>
          <p class="count">已售{{item.goods_sales}}件</p>
          <p class="price">
            <span class="new">¥{{item.goods_price_min}}</span>
            <span class="old">¥{{item.goods_price_max}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GuessIndex',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="less">
.guess-index{
  height: 160px;
  display: flex;
  background-color: #fff;
  margin-bottom: 10px;
  .left{
    img{
      width: 150px;
      height: 150px;
      margin-right: 20px;
    }
  }
  .right{
    .tit{
       font-size: 14px;
       margin-bottom: 30px;
    }
    .count{
      font-size: 12px;
      color: #d7d7d7;
      margin-bottom: 20px;
    }
    .new{
      color: red;
      font-size: 18px;
      margin-right: 12px;
    }
    .old{
      color: #d7d7d7;
      text-decoration: line-through;
      font-size: 12px;
    }
  }
}

</style>
