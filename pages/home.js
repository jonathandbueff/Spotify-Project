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

const Home = (props) => (
  <div style={homeStyle}>
	<Header className="homeHeader"/>	
  <ul className ="mainProfileBox">
  <li className="homeProfile" ><Profile {...props} /></li>
  <li className = "sideBarProfile" ><SideBar ></SideBar></li>
  </ul>
  <Footer className="homeFooter"/>
  <style jsx>{`
  .mainProfileBox{
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
    width: 25vw;
    position:fixed;
    right: 0;
    top: 51px;
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
  let username;
  let image;
  const res = await fetch(awsinstance+':3456/getCode?code='+code);
  const data = await res.json().then(function(data){
    username= data.username;
    image = data.image;
  });
  // console.log(JSON.stringify(res.data));
  
  // this.document.getElementById("usernameHere").textContent=username;
  return{
    data: {
      username: username,
      image: image
    }
  };
}
export default Home;
