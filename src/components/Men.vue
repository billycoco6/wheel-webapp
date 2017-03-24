<template>
  <div class="men">
    <el-row>
      <el-col :span="8" v-for="item in items">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.photo" class="image" height="300">
          <div style="padding: 14px;">
            <span> {{ item.text }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="navigateTo(item.text)">See the products</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
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

<script>
import router from '../router'

export default {
  data () {
    return {
      items: [
        {photo: '../../static/1.jpg', text: 'Fashion'},
        {photo: '../../static/2.jpg', text: 'Wearables'},
        {photo: '../../static/3.jpg', text: 'Games'},
        {photo: '../../static/4.jpg', text: 'Sport'},
        {photo: '../../static/5.jpg', text: 'Collectibles'},
        {photo: '../../static/6.jpg', text: 'Home'},
        {photo: '../../static/7.jpg', text: 'Books'},
        {photo: '../../static/8.jpg', text: 'Beauty'}
      ]
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
