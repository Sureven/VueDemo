<template>
<div>
      <table>
        <tr>
          <td>id</td>
          <td>名称</td>
          <td>价格</td>
          <td>数量</td>
          <td>操作</td>
        </tr>
        <tr v-if="!arr.length">
          <td>购物车很空</td>
        </tr>
        <tr v-for="(item,index) in arr" v-else>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="reduceNum(index)">-</button>
            <input v-model="item.num" type="text" name="">
            <button @click="addNum(index)">+</button>
          </td>
          <td><button @click="deleteGoods(index)" >删除</button></td>
        </tr>
        <tr>
          <td>总计：<span>{{totalMoney}}</span></td>
          <td><button @click="clearcar" >清空购物车</button></td>
        </tr>
      </table>
</div>
</template>
<script>
  import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        name: "car",
        methods:{
          ...mapActions(["reduceNum","addNum",]),
          clearcar(){
            this.$store.dispatch("clearcar")
          },
          deleteGoods(index){
            this.$store.dispatch("deleteGoods",index)
          }
        },
        computed:{
          ...mapGetters(["totalMoney"]),
          ...mapState(["arr"])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
