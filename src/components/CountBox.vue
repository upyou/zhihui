<template>
  <div class="count-box">
    <div class="minux">
      <button @click="handsub">-</button>
    </div>
    <input class="inp" :value="value" @change="handChange" type="text">
    <div class="add">
      <button @click="handadd">+</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handsub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handadd () {
      this.$emit('input', this.value + 1)
    },
    handChange (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }

  },
  props: {
    value: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less" scoped>
.count-box{
  display: flex;
  height: 30px;
  border-radius: 5px;
  padding: 0 10px;
  input{
    width: 40px;
    height: 30px;
    border: none;
    text-align: center;
  }
  button{
    width: 30px;
    height: 30px;
    border: none;
  }
}

</style>
