import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import Song from './song';
import Playlist from './playlist';
let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

const Profile = (props) => (
    <div>
    <div className="profileHead">
      {/* <img id="profileImageHere"></img> */}
      <div className="profileHeadText">
      <h3 id="usernameHere">{props.data.username}</h3>
      <p id="playlistLikesHere">Playlist likes</p>
      <input type="button" className="createBtn" value="Create Playlist" />
    </div>
    </div>
    <div className="recentlyMostPlayed">
        <h4 className="recentlyMostPlayedHead">Recently Most Played</h4>
      <ol className = "songList">
        {props.data.topTracks.map(p => (<li className ="songListItem" key={p.name}><Song {...p}/></li>))}
      </ol>
      </div> 
      <div className="playlistContainer">
        <h4 className="playlistListTitle">Playlists</h4>
        <ol className="playlist">
        {props.data.allPlaylists.map(p => (<li className ="playlistListItem" key={p.name}><Playlist {...p}/></li>))}

          {/* <li className = "playlistListItem"><Playlist></Playlist></li>
          <li className = "playlistListItem"><Playlist></Playlist></li>
          <li className = "playlistListItem"><Playlist></Playlist></li>
          <li className = "playlistListItem"><Playlist></Playlist></li>
          <li className = "playlistListItem"><Playlist></Playlist></li> */}
        </ol>
      </div>
      <style jsx>{`
      .playlistListTitle{
        margin:0;
        padding-bottom: 5px;
        padding-top: 5px;
        text-align:center;
        color: #1DB954;
      }
    .playlistContainer{
      font-family: console, monospace;
      margin: 0px;
      background: black;
      width: 75vw;
      left: 0;
      position:absolute;
      top: calc(35vh + 230.4px);
    }
    .playlistListItem{
      margin:0px;
      padding-bottom: 10px;
      color:#FFF;
    }
    .profileHead{
      width: 75vw;
      height: 35vh;
      // background: lightgrey;
      position: absolute;
      left:0;
      top: 50px;
      font-family: console, monospace;

    }
    .recentlyMostPlayed{
      background: black;
      color: #1DB954;
      width:75vw;
      position: absolute;
      top: calc(35vh + 50px);
      left:0;
      font-family: console, monospace;

    }
    .recentlyMostPlayedHead{
      margin: 0;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align:center;
    }
    .createBtn{
        position: absolute;
        font-family: console, monospace;
        left: calc( 37.5vw - 211.46px / 2);
        // top: calc( 35vh - 55px);
        background:#1DB954;
        color: #FFF;
        font-size: 14px;
        border: none;
        border-radius: 500px;
        padding: 16px 48px 18px;
        -webkit-transition: background 0.4s;
      transition-duration: background 0.4s;
    }
    .profileHeadText{
      margin: 0px;
      padding: 0px;
      text-align: center;
      position: relative;
      color: white;
      top: calc( 35vh - 155px);
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .songList{
      margin: 0px;
      // background: black;
      padding-bottom: 10px;
    }
    .songListItem{
      margin:0px;
      padding-bottom: 10px;
      // padding: 8px 0px 8px  10px;
      color: white;
      // border: 1px solid grey;
    }
    .createBtn:hover {
      background: black;
      color: #1DB954;     
    }
  `}
  </style>
    </div>
  );
    
  export default Profile;