<template lang="html">
  <div class="nabvar">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item @click="navigateTo('main.Home')">Home</el-menu-item>
      <el-menu-item @click="logOut()">Log out</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
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
