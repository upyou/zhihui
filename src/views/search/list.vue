<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item">综合</div>
      <div class="sort-item">销量</div>
      <div class="sort-item">价格 </div>
    </div>

    <div class="goods-list">
      <GuessIndes v-for="item in searchlist" :key="item.goodes_id" :item="item"></GuessIndes>
    </div>
  </div>
</template>

<script>
import GuessIndes from '@/components/GuessIndes.vue'
import { getSearchList } from '@/api/search'
export default {
  name: 'SearchIndex',
  components: {
    GuessIndes
  },
  computed: {
    querySearch () {
      return this.$route.query.search
    }
  },
  data () {
    return {
      searchlist: []
    }
  },
  async created () {
    const { data: { list } } = await getSearchList({ goodsName: this.querySearch, page: 1, categoryId: this.$route.query.categoryId })
    console.log(list.data)
    this.searchlist = list.data
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
