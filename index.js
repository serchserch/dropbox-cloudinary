'use strict';


var qs = require('querystring'),
  request = require('request'),
  restify = require('restify'),
  config = require('./config'),
  Dropbox = require('dropbox'),
  cloudinary = require('cloudinary');


console.log('config.dropbox');
console.log(config.dropbox);

var client = new Dropbox.Client({
  key: config.dropbox.key,
  secret: config.dropbox.secret,
  // sandbox: false
});




// var server = restify.createServer();
// server.get('/dropbox_oauth', function(res){
// 	console.log('res');
// 	console.log(res);
// });
//
// server.listen(3000, function() {
//   console.log('%s listening at %s', server.name, server.url);
// });

// var client = new Dropbox.Client(client);



client.authDriver(new Dropbox.AuthDriver.NodeServer(8912));

client.authenticate(function(error, client) {

  // console.log('error');
  // console.log(error);
  // console.log('client');
  // console.log(client);

  if (error) {
    // Replace with a call to your own error-handling code.
    //
    // Don't forget to return from the callback, so you don't execute the code
    // that assumes everything went well.
    // return (error);
  }

  // Replace with a call to your own application code.
  //
  // The user authorized your app, and everything went well.
  // client is a Dropbox.Client instance that you can use to make API calls.
  // doSomethingCool(client);


  // client.readFile('471598c9-3fec-4930-9815-dd070560350c.jpg', function(error, data) {
  //   if (error) {
  // 		console.error('error');
  // 		console.error(error);
  // 	}
  //
  //
  //   console.log('data');
  //   console.log(data);
  // });


  client.readdir('/', function(error, entries) {
    if (error) {
      console.error('error');
      console.error(error);
    }


    console.log('data');
    console.log(entries);
  });



});


// request.get('https://www.dropbox.com/1/oauth2/authorize?' + qs.stringify({
//   response_type: 'token',
//   client_id: config.dropbox.key
// }), {
//   // code: '/oauth2/authorize?response_type=code',
//   // grant_type: 'authorization_code',
//   // redirect_uri: 'http://localhost:3000',
//   // client_secret: config.dropbox.secret,
// }, function(res, err) {
//   console.log('res');
//   console.log(res);
//   console.log('err');
//   console.log(err.body);
// });
