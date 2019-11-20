import Link from 'next/link';
import Header from '../comps/header';
import OAuthLogin from '../comps/OAuthLogin';
import Layout from '../comps/Layout';
const axios = require('axios');

const Index = () => (
  <div>
	<Layout>
    <h2>Welcome</h2>
    <OAuthLogin />
    
  </Layout>	
  </div>
);



export default Index;
