import Header from '../comps/header';
import Layout from '../comps/Layout';
import Router from 'next/router';
import axios from 'axios';
let url2 = require('url');


// const getCode = url => {    
//     let urlToParse='http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/redirect'+url;
//     let adrParsed = url2.parse(urlToParse, true);
//     let urlData = adrParsed.query;
//     // alert(urlToParse);
//     // alert(urlData.code);
//     // alert(adrParsed.error);
//     // alert(adrParsed.state);    
//     let code = urlData.code;
//     sendCode(code);
//     // getToken(code);
//   }
// const sendCode = (code) => {
//     axios({
//         method: 'get',
//         url: 'http://ec2-18-234-109-238.compute-1.amazonaws.com:8888/getcode',
//         data: {
//             code: {code}
//         }
//     });
// }
let client_id = '77cf346e940b41adb5dd26e8c9f05a6b';
let client_secret = '564d8983f9b34a2b848bdb4bef25c9fc'; //TODO Hide this
let redirect_uri = "http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/redirect";
let encoded_client_id = Buffer.from(client_id).toString('base64');
let encoded_client_secret = Buffer.from(client_secret).toString('base64');
let encoded_authorizationo_code = Buffer.from("authorization_code").toString('base64');
let encoded_client = Buffer.from(client_id + ':' +client_secret).toString('base64');

// const getToken = (code) => {
//     axios({
//         method: 'post',
//         url: 'https://accounts.spotify.com/api/token',
//         data: {
//             grant_type: 'authorization_code',
//             code: {code},
//             redirect_uri: "http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/redirect"
//         },
//         headers: {
//             'Authorization': 'Basic ' + {encoded_client}
//         }
//     })
// }



// Router.events.on('routeChangeComplete', getCode);


const Redirect = () => (
<div>
<Layout>
<h2> Welcome to the redirect page </h2>
</Layout>
</div>
);



export default Redirect
