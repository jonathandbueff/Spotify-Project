import Link from 'next/link';

const linkStyle = {
  // marginRight: 15
  color: 'white'
};

const headerStyle = {
   margin:20,
   padding:20,
   border: '1px solid #DDD'};
const headerContainerStyle={
  display: 'inline-block',
  border: '1px solid black',
  padding: 10,
  margin: 5,
  textAlign: 'center',
  background: 'grey'
};

const Header = () => (
  <div style={headerStyle}>
    <div style={headerContainerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    </div>
    <div style={headerContainerStyle}>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    </div>
  </div>
);

export default Header;
