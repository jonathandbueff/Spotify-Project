let client_id ="77cf346e940b41adb5dd26e8c9f05a6b";
let response_type = "code";
// let scopes = "user-library-read user-read-private user-read-email";
let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //JON
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //JOE

let redirect_uri = awsinstance + ":3000/home"; 
let loginLink='https://accounts.spotify.com/authorize?' + 
'client_id=' + client_id + 
'&response_type=' + response_type + 
'&scope= user-modify-playback-state user-top-read user-library-modify user-follow-modify playlist-read-private playlist-modify-public playlist-modify-private user-read-playback-state user-read-currently-playing user-read-private user-follow-read playlist-read-collaborative user-read-email user-library-read streaming user-read-recently-played'
+ "&redirect_uri=" +redirect_uri ;
const OAuthLogin = () => (
<a href={loginLink}>
<input type='button' id='oAuthLoginSubmit' value='Login To Spotify'/>
</a>
);
export default OAuthLogin;
