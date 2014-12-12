(function(){

  'use strict';
  var express = require('express');
  var reloader = require('connect-livereload')
  var app = express();


var body = ''
process.stdin.on('data', function(chunk){
  body += chunk
})

process.stdin.on('end', function(){
  console.log('body');
  console.log(body);
})

  app.use(reloader());
  app.use(express.static('./client'));


  app.listen(9000, function(){
    console.log('App Listening on localhost:9000');
  });

})();