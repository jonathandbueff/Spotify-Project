let http = require("http");
let axios = require("axios");
let url = require("url");
let request = require('request');
let querystring = require("querystring");
let redirect_uri =
  "http://ec2-18-234-109-238.compute-1.amazonaws.com:8888/callback";
let my_client_id = "77cf346e940b41adb5dd26e8c9f05a6b";
let my_client_secret = "564d8983f9b34a2b848bdb4bef25c9fc"; //TODO Hide this
let my_code;




// function getToken(){
//   request.post({
//     authOptions,
//     headers: {
//       'Authorization': 'Basic ' + (new Buffer.from(
//         client_id + ':' + client_secret).toString('base64'))},
//       },
//       function(error, response, body){
//         // let access_token = body.access_token;
//         // console.log(error);
//         // console.log(body.access_token);
//     // console.log(access_token);
//     // let uri = 'http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/redirect'
//     // res.redirect(uri + '?access_token=' + access_token)
//   })
// }


function getToken (userCode){
 my_code = userCode;

  // console.log(code);
  // axios.get('/callback', function(req, res){
  // let authOptions = {
  //   url: 'https://accounts.spotify.com/api/token',
  //   form: {
  //     code: userCode,
  //     redirect_uri,
  //     grant_type: 'authorization_code'
  //   },
  //   headers: {
  //     'Authorization': 'Basic ' + (new Buffer.from(
  //     client_id + ':' + client_secret).toString('base64'))
  //   },
  //   json: true
  // }
  // request.post(authOptions, function(error, response, body){
  //   console.log(body);
  // })
// })
// console.log(userCode);
// axios({
//   method: 'post',
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   body: {
//     grant_type: "authorization_code",
//     code: {userCode},
//     redirect_uri: 'http://ec2-18-234-109-238.compute-1.amazonaws.com:8888/getcode'
//   }
// }).then(function(response){ console.log(response);}).catch(function(error){console.log(error);});
let options = {
  method: 'POST',
  url: 'https://accounts.spotify.com/api/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  form: {
    grant_type: 'authorization_code',
    client_id: my_client_id,
    client_secret: my_client_secret,
    code: my_code,
    redirect_uri: 'http://ec2-18-234-109-238.compute-1.amazonaws.com:8888/getcode'
}
};
request(options, function (error, response, body) {
  if(error) throw new Error(error);
  let jsonBody = JSON.parse(body);
  let accessToken = jsonBody.access_token;
  let refreshToken = jsonBody.refresh_token;
  console.log("ACCESS TOKEN : " + accessToken);
  console.log("REFRESH TOKEN : " + refreshToken);
  // let data = JSON.parse(body);
  // let accessToken = JSON.stringify(body.access_token);
  // let refreshToken = body.refresh_token;
  // console.log("ACCESS TOKEN : " + accessToken);
  // console.log("REFRESH TOKEN : " + refreshToken);
});

}

http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let code = q.query.code || null;
    // console.log(code);
    if(code != null){
      getToken(code);
    }
    
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end("Hello World\n");
  })
  .listen(8888);
console.log("Server running at http://localhost:8888/");
