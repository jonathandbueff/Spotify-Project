const express = require("express");
const app = express();
const port = 3456;
const request = require("request");
const http = require("http");
const mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "spotify",
  password: "wustl",
  database: "spotify"
});
let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //JON
// let awsinstance = "http://ec2-18-234-109-238.compute-1.amazonaws.com"; //JOE
// CONNECT TO MYSQL DATABASE
con.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
});
//GLOBAL VARIABLES
let my_client_id = "77cf346e940b41adb5dd26e8c9f05a6b";
let my_client_secret = "564d8983f9b34a2b848bdb4bef25c9fc";
let accessToken;
let refreshToken;
let my_redirect_uri = awsinstance + ":3000/home";
let playlist_tracks;
let tracks_metrics;
let currentUsername;

//USER PROFILE DATA
async function getUserProfile() {
  return new Promise((resolve, reject) => {
    let options = {
      method: "GET",
      url: "https://api.spotify.com/v1/me",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + accessToken
      }
    };
    request(options, function(error, response, body) {
      if (error) return reject(error);
      return resolve(response);
    });
  });
}
//USER TOP ARTIST
async function getUserTopArtist() {
  return new Promise((resolve, reject) => {
    let options = {
      method: "GET",
      url:
        "https://api.spotify.com/v1/me/top/artists?limit=1&time_range=medium_term",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + accessToken
      }
    };
    request(options, function(error, response, body) {
      if (error) return reject(error);
      let tempData=JSON.parse(body).items[0]
      let topArtist = tempData.name;
      let topArtistImage = tempData.images[0].url;
      let returnValue = {topArtist: topArtist, topArtistImage: topArtistImage};
      return resolve(returnValue);
    });
  });
}
//USER TOP TRACKS
async function getTopTracks() {
  return new Promise((resolve, reject) => {
    let options = {
      method: "GET",
      url:
        "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=medium_term",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + accessToken
      }
    };
    request(options, function(error, response, body) {
      if (error) return reject(error);
      let returnValue = topTracksHelper(response);
      return resolve(returnValue);
    });
  });
}
function topTracksHelper(topTracks) {
  let parsedTopTracks = JSON.parse(topTracks.body).items;
  let tracks = [];
  let index = 0;
  //GET THE TITLE, ARTIST, LISTENS OF TOP 5 TRACKS, PLACE IN TRACKS[] AS JSON OBJ
  parsedTopTracks.forEach(track => {
    let trackArtists = "L";
    let trackJSON = JSON.stringify(track);
    track.artists.forEach(artist => {
      trackArtists += artist.name + ", ";
    });
    trackArtists = trackArtists.substring(1, trackArtists.length - 2);
    tracks[index] = {
      title: track.name,
      popularity: track.popularity,
      artist: trackArtists
    };
    let sql =
      "insert INTO topSongs(username, rank, title, popularity, artist, track) VALUES (" +
      currentUsername +
      "," +
      index +
      ",'" +
      track.name +
      "'," +
      track.popularity +
      ",'" +
      trackArtists +
      "','" +
      trackJSON +
      "') ON DUPLICATE KEY UPDATE rank = " +
      index +
      ", title = '" +
      track.name +
      "', popularity=" +
      track.popularity +
      ", artist='" +
      trackArtists +
      "', track='" +
      trackJSON +
      "'";
    con.query(sql, function(err, result) {
      if (err) console.log(err);
    });
    index++;
  });
  return tracks;
}


// gets users playlist
async function getPlaylists() {
  return new Promise((resolve, reject) => {
    let options = {
      method: "GET",
      url: 
        "https://api.spotify.com/v1/me/playlists",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + accessToken
      }
    };
    request(options, function(error, response, body) {
      if (error) return reject(error);
      let returnValue = getPlaylistHelper(response);
      return resolve(returnValue);
    });
  });
}

function getPlaylistHelper(playlists) {
  let parsedPlaylists = JSON.parse(playlists.body).items;
  console.log(parsedPlaylists);
  let listOfPlaylists = [];
  let index = 0;
  //GET THE TITLE, ARTIST, LISTENS OF TOP 5 TRACKS, PLACE IN TRACKS[] AS JSON OBJ
  parsedPlaylists.forEach(playlist => {
    // let playlistImage = playlist.image.url;
    let playlistName = playlist.name;
    let owner = playlist.owner.display_name
    listOfPlaylists[index] = {
      title: playlistName,
      creator: owner
    };
    // let sql =
    //   "insert INTO topSongs(username, rank, title, popularity, artist, track) VALUES (" +
    //   currentUsername +
    //   "," +
    //   index +
    //   ",'" +
    //   track.name +
    //   "'," +
    //   track.popularity +
    //   ",'" +
    //   trackArtists +
    //   "','" +
    //   trackJSON +
    //   "') ON DUPLICATE KEY UPDATE rank = " +
    //   index +
    //   ", title = '" +
    //   track.name +
    //   "', popularity=" +
    //   track.popularity +
    //   ", artist='" +
    //   trackArtists +
    //   "', track='" +
    //   trackJSON +
    //   "'";
    // con.query(sql, function(err, result) {
    //   if (err) console.log(err);
    // });
    index++;
  });
  return listOfPlaylists;
}



//PLAYLIST TRACKS
function getPlaylistTracks(playlist) {
  let options = {
    method: "GET",
    url: playlist.tracks.href,
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + accessToken
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    let track_info = JSON.parse(body);
    // console.log(playlist.name)
    let obj = JSON.parse(track_info.items[0].track);
    // console.log(obj);



    // }
  });
}
//TOKEN
async function getToken(theCode) {
  let options = {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    form: {
      grant_type: "authorization_code",
      client_id: my_client_id,
      client_secret: my_client_secret,
      code: theCode,
      redirect_uri: my_redirect_uri
    }
  };
  return new Promise((resolve, reject) => {
    request(options, function(error, response, body) {
      if (error) return reject(error);
      let jsonBody = JSON.parse(body);
      refreshToken = jsonBody.refresh_token;
      accessToken = jsonBody.access_token;
      return resolve("complete");
    });
  });
}
//CALLED TO GET DATA FOR HOMEPAGE. ASYNC SO HOMEPAGE WILL WAIT FOR DATA BEFORE LOADING
async function getDataHelper() {
  let userData = await getUserProfile();
  let parsedUserData = JSON.parse(userData.body);
  let username = JSON.stringify(parsedUserData.id);
  let userTopArtist = await getUserTopArtist();
  currentUsername = username;
  let topTracks = await getTopTracks(); // [{title: string, popularity: int, artist: string}]
  let allPlaylists = await getPlaylists(); // [{title: string, creator: string}]
  parsedUserData["image"] = null;
  if (parsedUserData.images != undefined) {
    image = JSON.stringify(parsedUserData.images[0].url);
    parsedUserData["image"] = image;
  }
  let sql =
    "insert INTO users (username, image, accessToken, refreshToken) VALUES (" +
    username +
    "," +
    image +
    ",'" +
    accessToken +
    "','" +
    refreshToken +
    "') ON DUPLICATE KEY UPDATE image = " +
    image +
    ", accessToken = '" +
    accessToken +
    "', refreshToken ='" +
    refreshToken +
    "'";
  con.query(sql, function(err, result) {
    if (err) console.log(err);
  });
  let parsedData = {
    username: parsedUserData.id,
    image: parsedUserData.image,
    topTracks: topTracks,
    allPlaylists: allPlaylists,
    topArtist: userTopArtist.topArtist,
    topArtistImage: userTopArtist.topArtistImage
  };
  return parsedData;
}
//CALLED ON LOGIN. WAITS FOR TOKEN THEN CALLS getDATAHELPER TO GET HOME PAGE DATA
app.get("/getCode", async (req, res) => {
  let theCode = req.query.code;
  try {
    const token = await getToken(theCode);
    const parsedData = await getDataHelper();
    let pUser = parsedData;
    // console.log(parsedData);
    res.send(parsedData);
  } catch (err) {
    console.log(err);
  }
});

//START SERVER
app.listen(port, () =>
  // res.send("HELLO THIS IS YOUR SERVER"),
  console.log(`Example app listening on port ${port}!`)
);
