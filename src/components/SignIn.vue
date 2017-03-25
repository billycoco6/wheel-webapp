<template>
  <el-row :gutter="20" class='signin'>
    <el-col :span="8"><div class="grid-content"></div></el-col>
    <el-col :span="8" class='center'>
      <h2>Wheel Spinner</h2>
      <el-form label-width="70px">
        <el-form-item label="email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input type='password' v-model="password"></el-input>
        </el-form-item>
        <div class="">
          <el-button type="primary" @click="login">Sign in</el-button>
        </div>
        <br>Not a member? <el-button type="text" @click="navigateTo('main.SignUp')">Join now</el-button>
      </el-form>
    </el-col>
    <el-col :span="8"><div class="grid-content"></div></el-col>
  </el-row>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    navigateTo (nav) {
      console.log('==== navigate ====')
      router.push({ name: nav })
    },
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        router.push({ name: 'main.Home' })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .center {
    margin-top: 15%;
  }
</style>
