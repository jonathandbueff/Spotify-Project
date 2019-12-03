import fetch from 'isomorphic-unfetch';
import Layout from '../comps/Layout';
import Router from 'next/router';
import absoluteUrl from "next-absolute-url";
import url from "url";
import Profile from '../comps/profile';
import Header from '../comps/header';
import SideBar from '../comps/sideBar';
import Footer from '../comps/footer';
// let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon
let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe
const homeStyle ={
  position: "absolute",
  background: "url('/12.png') no-repeat center fixed",
  backgroundSize: "cover",
  left: "0",
  top: "0",
  right: "0",
  height: "100%",
  width: "100%"
}
const PlaylistDisplay = props => (
  <div style={homeStyle}>
	<Header className="homeHeader"/>
  <ul className ="mainProfileBox">
  <img className="profileImage" src={props.data.image} alt="profileimage"/>
  {/* <img className="artistImage" src={props.data.topArtistUrl} alt="profileimage"/> */}
  {/* <li className="homeProfile" ><Playlist/></li> */}
  {/* <h3>{props.}</h3> */}
  <li className = "sideBarProfile" ><SideBar {...props}></SideBar></li>
  </ul>
  <Footer className="homeFooter"/>
  <style jsx>{`
  .playlistTitle{
    text-align: center;
    z-index: 1000000;
    color: white;
  }
  .profileImage{
    position: absolute;
    top: 50px;
    left: 0px;
    max-width: calc( 75vw /2 );
    max-height: 35vh;
  }
  .artistImage{
    position: absolute;
    top: 50px;
    right: 25%;
    max-width: calc( 75vw /2 );
    max-height: 35vh;
  }
  .mainProfileBox{
    max-width: 75%;
    margin:0;
    list-style-type: none;
  }
  .homeHeader{
    margin:0;
    position:fixed;
  }
  .homeProfile{
    margin:0;
    display: inline-block;
  }
  .sideBarProfile{
    display: inline-block;
    width: 25%;
    position:fixed;
    right: 0;
    top: 51px;
    padding:0;
  }
  .homefooter{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width:100vw;
  }
  `}
  </style>
  </div>
  );
  PlaylistDisplay.getInitialProps = async function(req){
    let playlist = req.query.playlist;
    let creator =req.query.creator;
    let username = creator;
    let accessToken="none";
    const result = await fetch(awsinstance+':3456/getPlaylistData?username='+username+'&title='+playlist);
    const dataAll = await result.json();
    console.log(dataAll.playlist.title);
    const result2 = await fetch(awsinstance+':3456/getOtherUsers?token='+accessToken+'&username='+username);
    const allUsers = await result2.json();
    

    return {data:{
    image: dataAll.image,
    allUsers: allUsers,
    title: dataAll.playlist.title,
    user: username
    }};
    // return data 
  }
  
  export default PlaylistDisplay;