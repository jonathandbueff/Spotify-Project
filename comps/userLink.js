// constructor(props){
//     let userImage=props.data.image;
//     console.log(userImage);
// }
const UserLink = props => (
  <div>
    <div className="userLinkBox">
    <img className="profilePic" src={props.data.image}></img>
    <div className="userInfo">
        <p className="userLinkusername">USERNAME</p>
    </div>
    </div>
    <style jsx>{`
    .profilePic{
        display: inline-block;
        width: 50px;
        float: left;
        padding-top: 1px;
        
    }
    .userLinkusername{
        display: inline-block;
    }
    .userInfo{
        display: inline-block;
    }
    .userLinkBox{
        color: white;
        width: calc(100% - 22px);
        text-align: right;
        border: 1px solid #1DB954;
    }
    `}
    </style>
  </div>
);

export default UserLink;