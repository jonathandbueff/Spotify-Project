import fetch from 'isomorphic-unfetch';
import Layout from '../comps/Layout';
import Router from 'next/router';
import absoluteUrl from "next-absolute-url";
import url from "url";
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
  let hello;
  const res = await fetch('http://ec2-18-234-109-238.compute-1.amazonaws.com:3456/getCode?code='+code);
  const data = await res.json().then(function(data){
    hello = data.hello;
    console.log(hello);
  });
  // console.log(JSON.stringify(res.data));
  return{
    someData: hello
  };
}
export default Home;
