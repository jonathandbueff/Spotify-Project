import Link from 'next/link';

const linkStyle = {
  color: 'white'
};
const headerStyle = {
   position: 'relative',
   left: 0,
   right: 0,
   border: '1px solid #DDD',
  };
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
  </div>
);

export default Header;
