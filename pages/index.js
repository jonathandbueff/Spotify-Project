import Link from 'next/link';
import Header from '../comps/header'
import OAuthLogin from '../comps/OAuthLogin'

const Index = () => (
  <div>
	<Header />
    <p>Hello Next.js</p>
    <OAuthLogin />	
  </div>
);

export default Index;
