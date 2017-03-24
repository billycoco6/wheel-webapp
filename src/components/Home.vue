<template lang="html">
  <div class="home">
  <el-row>
    <el-col :span="12">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/Men.jpg" class="image" height="700">
        <div style="padding: 14px;">
          <span>Male</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="navigateTo('main.Men')">Go to Men sites</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/Women.jpg" class="image" height="700">
        <div style="padding: 14px;">
          <span>Female</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="navigateTo('main.Women')">Go to Women sites</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import router from '../router'

export default {
  data () {
    return {
      currentDate: new Date()
    }
  },
  methods: {
    navigateTo (nav) {
      console.log('==== navigate ====')
      router.push({ name: nav })
    }
  }
}
</script>

<style lang="css">
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
