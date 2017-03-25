<template>
  <el-row :gutter="20" class='signin'>
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="16" >
      <el-form label-width="150px">
        <h2>Registration</h2>
        <el-form-item label="First Name">
          <el-input v-model="firstname"></el-input>
        </el-form-item>
        <el-form-item label="Last Name">
          <el-input v-model="lastname"></el-input>
        </el-form-item>
        <el-form-item label="E-mail">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type='password' v-model="password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input type='password' v-model="confirmPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register()">Submit</el-button>
          <el-button @click="navigateTo(main.SignIn)">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
  </el-row>
</template>

<script>
import router from '../router'
import UsersApi from '../api/users.js'

export default {
  name: 'signun',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    submit () {
      console.log('===== submit =====')
      // make an api call to store user info
      router.push({ name: 'main.SignIn' })
    },
    navigateTo (nav) {
      router.push({ name: nav })
    },
    register () {
      UsersApi.signUp(this.email, this.password, this.firstname, this.lastname)
      router.push({ name: 'main.SignIn' })
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
