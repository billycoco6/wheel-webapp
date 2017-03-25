<template lang="html">
  <div class="nabvar">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item @click="navigateTo('main.Home')">Home</el-menu-item>
      <el-menu-item @click="logOut()">Log out</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import router from './router'
  import UsersApi from './api/users.js'
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      navigateTo (nav) {
        console.log('==== navigate ====')
        router.push({ name: nav })
      },
      logOut () {
        UsersApi.logout()
      }
    }
  }
</script>
