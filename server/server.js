const express = require('express');
const app = express();
const port = 3456;
const request = require("request");
let http = require("http");

let my_client_id = "77cf346e940b41adb5dd26e8c9f05a6b";
let my_client_secret = "564d8983f9b34a2b848bdb4bef25c9fc";
let accessToken;
let refreshToken;
let my_redirect_uri = 'http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/home';

function getUserProfile(){
    let options = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}
    };
    request(options, function (error, response, body){
      if (error) throw new Error(error);
      console.log(body);
    });
}
function getUserSavedTracks(){
    let options = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}
    };
    request(options, function (error, response, body){
      if (error) throw new Error(error);
      
    });
}
function getPlaylists(){
    let options ={
        method: 'GET',
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}
    };
        request(options, function (error, response, body){
      if (error) throw new Error(error);
      console.log(body);
    });
}

async function getToken(theCode){
    // console.log(theCode);
    let options = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      form: {
        grant_type: 'authorization_code',
        client_id: my_client_id,
        client_secret: my_client_secret,
        code: theCode,
        redirect_uri: my_redirect_uri
    } 
}
request(options, function (error, response, body) {
    if(error) throw new Error(error);
    let jsonBody = JSON.parse(body);
    console.log(body);
    accessToken = jsonBody.access_token;
    refreshToken = jsonBody.refresh_token;
    getUserProfile();
    getUserSavedTracks();
    getPlaylists();
    // token =accessToken;
    // redirect();
    // console.log("ACCESS TOKEN : " + accessToken);
    // console.log("REFRESH TOKEN : " + refreshToken);
    // goToHome(accessToken, refreshToken);
    // response.redirect("http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/?access+token=" + accessToken);
  });
  
  
}


app.get('/getCode', async (req,res)=> {
    let theCode = req.query.code;
    getToken(theCode);
    res.send({hello: "hi"});
});


app.listen(port, () => 
// res.send("HELLO THIS IS YOUR SERVER"),
console.log(`Example app listening on port ${port}!`));

