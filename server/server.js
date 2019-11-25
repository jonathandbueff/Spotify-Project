const express = require('express');
const app = express();
const port = 3456;
const request = require("request");
let http = require("http");
let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //JON
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //JOE

let my_client_id = "77cf346e940b41adb5dd26e8c9f05a6b";
let my_client_secret = "564d8983f9b34a2b848bdb4bef25c9fc";
let accessToken;
let refreshToken;
let my_redirect_uri = awsinstance +':3000/home';
let playlist_tracks;
let tracks_metrics;

function getUserProfile(){
    let options = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}
    };
    request(options, function (error, response, body){
      if (error) throw new Error(error);
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
      let playlist_info = JSON.parse(body);
      getPlaylistTracks(playlist_info.items[0])
    //   for (let x = 0; x <playlist_info.items.length; x++){
    //       getPlaylistTracks(playlist_info.items[x])
    //   }
    });
}

function getPlaylistTracks(playlist){
    let options ={
        method: 'GET',
        url: playlist.tracks.href,
        headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}
    };
    request(options, function (error, response, body){
        if (error) throw new Error(error);
        let track_info = JSON.parse(body);
        console.log(playlist.name)
        console.log(track_info.items[0].track.album);

        // for (let x = 0; x <track_info.items.length; x++){
        //     console.log(track_info.items[x][12]);
        // } 
        // //loop through each track in a playlist
        // for (let x =0; x < body.items.length; x++){

        // }
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

