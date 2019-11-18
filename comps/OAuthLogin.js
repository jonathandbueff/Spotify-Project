let client_id ="77cf346e940b41adb5dd26e8c9f05a6b";
let response_type = "code";
let scopes = "user-follow-read user-read-recently-played user-library-read user-read-playback-state user-library-modify user-read-currently-playing user-modify-playback-state user-follow-modify playlist-read-collaborative streaming playlist-modify-private playlist-modify-public user-read-email playlist-read-private user-top-read user-read-private";
let redirect_uri = "http://ec2-18-234-109-238.compute-1.amazonaws.com:3000/redirect";     

let loginLink='https://accounts.spotify.com/authorize?client_id=' + client_id + '&response_type=' + response_type + '&scopes=' + scopes + '&redirect_uri=' + redirect_uri;

const OAuthLogin = () => (
<a href={loginLink}>
<input type='button' id='oAuthLoginSubmit' value='Login To Spotify'/>
</a>
);
export default OAuthLogin;
