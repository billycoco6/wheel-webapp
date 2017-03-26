<template lang="html">
  <div class="nabvar">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index=1 @click="navigateTo('main.Home')">Home</el-menu-item>
      <el-menu-item index=2 @click="logOut()">Log out</el-menu-item>
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
        router.push({ name: nav })
      },
      logOut () {
        UsersApi.logout()
      }
    }
  }
</script>
