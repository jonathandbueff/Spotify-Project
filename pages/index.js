import Link from 'next/link';
import Header from '../comps/header';
import OAuthLogin from '../comps/OAuthLogin';
import Layout from '../comps/Layout';
const axios = require('axios');

// async function createRequest(){
// axios.get('https://accounts.spotify.com/authorize').then(resp => {
//     alert(resp.data);
// });
// }
// axios.get('http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/').then(resp =>{
//   // alert("success");
// })

const Index = () => (
  <div>
	<Layout>
    <h2>Welcome</h2>
    <OAuthLogin />
    
  </Layout>	
  </div>
);



export default Index;
