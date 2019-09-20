<template>
    <div>
        <table>
          <tr>
            <td>id</td>
            <td>名称</td>
            <td>价格</td>
            <td>操作</td>
          </tr>
          <tr v-for="item in arr">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td><button @click="addGoods(item)" >加入购物车</button></td>
          </tr>
        </table>
    </div>

</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            arr:[
              {id:22,name:"小炒肉",price:"￥25.00"},
              {id:13,name:"皮蛋瘦肉粥",price:"￥13.00"},
              {id:36,name:"凉皮",price:"￥15.00"},
              {id:19,name:"肉夹馍",price:"￥10.00"},
              {id:28,name:"干锅鸭头",price:"￥205.00"},
            ]
          }
        },
      methods:{
        addGoods(item){
          this.$store.dispatch("addGoods",item)
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
