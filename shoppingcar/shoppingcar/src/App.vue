<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/list"v-show="$route.path=='/car'">去列表</router-link>
    <router-link to="/car" v-show="$route.path=='/list'">去购物车</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
