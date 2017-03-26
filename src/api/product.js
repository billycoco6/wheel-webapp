import Vue from 'vue'

export default {
  getCategory (callback) {
    // var jwt = localStorage.getItem('jwt')
    // var loginParams = {
    //   auth: {
    //     jwt: jwt
    //   }
    // }
    // console.log(loginParams)
    Vue.$http.get('categories')
    .then(function (response) {
      // console.log(response.data)
      callback(response.data)
      return response.data
    })
    .catch(function (response) {
      console.log('error')
    })
  }
}
