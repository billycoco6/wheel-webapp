<template lang="html">
  <div class="category">
    <!-- <el-button type="text" @click="dialogFormVisible = true" type="text">open a Form nested Dialog</el-button> -->
    <el-button type="button" @click="dialogFormVisible = true">Add the product</el-button>
    <el-dialog title="Shipping address" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Product Name" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Category" :label-width="formLabelWidth">
          <el-select v-model="form.category" placeholder="Choose category">
            <el-option label="Fashion" value="Fashion"></el-option>
            <el-option label="Wearable" value="Wearable"></el-option>
            <el-option label="Games" value="Games"></el-option>
            <el-option label="Sport" value="Sport"></el-option>
            <el-option label="Collectibles" value="Collectibles"></el-option>
            <el-option label="Home" value="Home"></el-option>
            <el-option label="Books" value="Books"></el-option>
            <el-option label="Beauty" value="Beauty"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Image url" :label-width="formLabelWidth">
          <el-input v-model="form.url" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-col :span="8" v-for="item in items">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.photo" class="image" height="300">
          <div style="padding: 14px;">
            <span> {{ item.text }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="navigateTo('main.Category')">See the products</el-button>
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
      items: [
       {photo: '../../static/1.jpg', text: 'First product'},
       {photo: '../../static/2.jpg', text: 'Second product'},
       {photo: '../../static/3.jpg', text: 'Third product'}
      ],
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        category: '',
        url: ''
      },
      formLabelWidth: '120px'
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
