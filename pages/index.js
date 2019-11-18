import Link from 'next/link';
import Header from '../comps/header'
import OAuthLogin from '../comps/OAuthLogin'

const Index = () => (
  <div>
	<Header />
    <h2>Welcome</h2>
    <OAuthLogin />	
  </div>
);

export default Index;
