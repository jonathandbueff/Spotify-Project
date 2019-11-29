const express = require('express');
const app = express();
const port = 3456;
const request = require("request");
const http = require("http");
const mysql = require('mysql');
let con = mysql.createConnection({host: "172.31.18.188",user: "spotify",password: "wustl",database: "spotify"});
// let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //JON
let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //JOE
// CONNECT TO MYSQL DATABASE
con.connect(function(err) {if (err) console.log(err); console.log("Connected!");});
//GLOBAL VARIABLES
let my_client_id = "77cf346e940b41adb5dd26e8c9f05a6b";
let my_client_secret = "564d8983f9b34a2b848bdb4bef25c9fc";
let accessToken;
let refreshToken;
let my_redirect_uri = awsinstance +':3000/home';
let playlist_tracks;
let tracks_metrics;
let userData;

//USER PROFILE DATA
async function getUserProfile(){
    return new Promise((resolve, reject)=>{
        let options = {method: 'GET', url: 'https://api.spotify.com/v1/me', headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}};
        request(options, function (error, response, body){
          if (error) return reject(error)
          return resolve (response)});})
}
//USER TOP ARTIST
async function getUserTopArtist(){
    let topArtistImage;
    let options = {method: 'GET', url: 'https://api.spotify.com/v1/me/top/artists?limit=1&time_range=medium_term', headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}};
    request(options, async function (error, response, body){
      if (error) throw new Error(error);});
}
//USER SAVED TRACKS
function getUserSavedTracks(){
    let options = {method: 'GET', url: 'https://api.spotify.com/v1/me/tracks', headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}};
    request(options, function (error, response, body){
      if (error) throw new Error(error); });
}
//USER PLAYLISTS
function getPlaylists(){
    let options ={method: 'GET', url: 'https://api.spotify.com/v1/me/playlists', headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}};
        request(options, function (error, response, body){
      if (error) throw new Error(error);
      let playlist_info = JSON.parse(body);
    //   console.log(playlist_info);
    //   if(playlist_info.total != 0){
    //   getPlaylistTracks(playlist_info.items[0])}
    //   for (let x = 0; x <playlist_info.items.length; x++){
    //       getPlaylistTracks(playlist_info.items[x])
    //   }
    });
}
//PLAYLIST TRACKS
function getPlaylistTracks(playlist){
    let options ={
        method: 'GET',
        url: playlist.tracks.href,
        headers: {'content-type': 'application/json', authorization: 'Bearer ' + accessToken}
    };
    request(options, function (error, response, body){
        if (error) throw new Error(error);
        let track_info = JSON.parse(body);
        // console.log(playlist.name)
        let obj = JSON.parse(track_info.items[0].track);
        // console.log(obj);

        // for (let x = 0; x <track_info.items.length; x++){
        //     console.log(track_info.items[x][12]);
        // } 
        // //loop through each track in a playlist
        // for (let x =0; x < body.items.length; x++){

        // }
      });
}
//TOKEN
async function getToken(theCode){
    let options = {
      method: 'POST', url: 'https://accounts.spotify.com/api/token', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      form: { grant_type: 'authorization_code', client_id: my_client_id, client_secret: my_client_secret, code: theCode, redirect_uri: my_redirect_uri} 
}
return new Promise((resolve,reject)=>{
    request(options, function (error, response, body) {
    if(error) return reject(error)
    let jsonBody = JSON.parse(body);
    refreshToken = jsonBody.refresh_token;
    accessToken =jsonBody.access_token;
    return resolve("complete")
  });})
}

//CALLED TO GET DATA FOR HOMEPAGE. ASYNC SO HOMEPAGE WILL WAIT FOR DATA BEFORE LOADING
async function getDataHelper(){
    let userData = await getUserProfile();
    let parsedData = JSON.parse(userData.body);
    let username =JSON.stringify(parsedData.id);
    // let image = null;
    parsedData["image"] = null;
    if (parsedData.images != undefined){
      image = JSON.stringify(parsedData.images[0].url)
      parsedData["image"] = image}
    let sql = "replace INTO users (username, image, accessToken, refreshToken) VALUES ("+username+","+image+",'"+accessToken+"','"+ refreshToken+"')";
    con.query(sql, function (err, result) {
      if(err) console.log(err);
      console.log("1 record inserted");
    });
    return parsedData;
}

//CALLED ON LOGIN. WAITS FOR TOKEN THEN CALLS getDATAHELPER TO GET HOME PAGE DATA
app.get('/getCode', async (req,res)=> {
    let theCode = req.query.code;
    try{
        const token = await getToken(theCode)
        const parsedUserData = await getDataHelper()
        let pUser = parsedUserData;
        console.log(pUser.image);
        res.send({username: pUser.id, image: pUser.image});
    }
    catch(err){console.log(err)}
});

//START SERVER
app.listen(port, () => 
// res.send("HELLO THIS IS YOUR SERVER"),
console.log(`Example app listening on port ${port}!`));

