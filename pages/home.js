import fetch from 'isomorphic-unfetch';
import Layout from '../comps/Layout';
import Router from 'next/router';
import absoluteUrl from "next-absolute-url";
import url from "url";
let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com';
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com';

// import url from "url";
// import location from ('location-href');
// let location = require('location-href');
// let urlMod = require('url');
// let express = require('express')
// let app = express()
// let axios = require('axios').default;
// let qs = require('qs');
// let fs = require("fs");
const Home = (props) => (
  <div>
	<Layout>
    <h2>Welcome to your home page</h2>
  {props.someData}
  </Layout>	
  </div>
);


//   const response = await fetch('http://ec2-18-234-109-238.compute-1.amazonaws.com:3456/getCode',
//   {
//     mode: "no-cors"
//   });
//   const body = await response.json();
//   if(response .status!== 200){
//     throw Error(body.message)
//   }
//   return body;
// };




// Router.events.on('routeChangeComplete', sendCodeToBackend().then(res=> console.log("res")).catch(err=>console.log(err)));
// .then(res=> alert("HI")).catch(err =>console.log(err))
Home.getInitialProps = async function(req){
  let code = req.query.code;
  let playlists;
  const res = await fetch(awsinstance+':3456/getCode?code='+code);
  const data = await res.json().then(function(data){
    playlists = data;
    console.log(playlists);
  });
  // console.log(JSON.stringify(res.data));
  return{
    someData: playlists
  };
}
export default Home;
