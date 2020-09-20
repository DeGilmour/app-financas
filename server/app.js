var express = require('express');
var https = require('https');
var app = express();

https.createServer(app).listen(443);

new Vue({
    el: '#app-vue',
    data() {
      return {
        users: [],
        loading: false,
        submitting: false,
        nome: '',
      }
    },
    
  })