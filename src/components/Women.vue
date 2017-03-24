<template>
  <div class="women">
    <men></men>
  </div>
</template>
<style>
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
  },
  components: {
    Men: require('./Men.vue')
  }
}
</script>
