import OAuthLogin from '../comps/OAuthLogin';
// import Layout from '../comps/Layout';
import Header from '../comps/header';



const bodyStyle= {
  background: "url('/12.png')"
};
const Index = () => (
 
  <body style={bodyStyle}>
	<div className="headerBox"><Header/></div>
  <div className="loginBtnBox"><OAuthLogin/></div>
  <style jsx>{`
    .loginBtnBox{
      position: absolute;
      left:0;
      top:50%;
      left: calc(50% - 97.82px);
    }
  `}
  </style>
  </body>

);



export default Index;

