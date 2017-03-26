import Vue from 'vue'
import store from '../store'

export default {
  login (email, password, callback) {
    console.log(store)
    var loginParams = {
      auth: {
        email: email,
        password: password
      }
    }
    // console.log(loginParams)
    Vue.$http.post('/user_token', loginParams)
    .then(function (response) {
      store.dispatch('login')
      callback(response.data)
      // console.log(response.data)
      localStorage.setItem('jwt', response.data.jwt)
      console.log('test jwt')
      console.log(localStorage.getItem('jwt'))
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log(store)
    // Vue.$http.delete('/users/api_sign_out.json')
    // .then(function (response) {
    store.dispatch('logout')
    //   callback(response.data)
    // })
    // .catch(function (response) {
    //   store.dispatch('logout')
    // })
  },
  signUp (email, password, firstname, lastname, callback) {
    console.log(store)
    var loginParams = {
      auth: {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      }
    }
    Vue.$http.post('users/register', loginParams)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (response) {
      console.log('register error')
      store.dispatch('logout')
    })
  },
  checkSignIn (callback) {
    console.log(store)
  }
}
