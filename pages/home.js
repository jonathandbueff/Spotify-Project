import fetch from 'isomorphic-unfetch';
import Layout from '../comps/Layout';
import Router from 'next/router';
import absoluteUrl from "next-absolute-url";
import url from "url";
let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com';
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com';

const Home = (props) => (
  <div>
	<Layout>
    <h2>Welcome to your home page</h2>
  {props.someData}
  </Layout>	
  </div>
);

Home.getInitialProps = async function(req){
  let code = req.query.code;
  let playlists;
  const res = await fetch(awsinstance + ':3456/getPlaylists?code='+code);
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
