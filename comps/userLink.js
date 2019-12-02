// constructor(props){
//     let userImage=props.data.image;
//     console.log(userImage);
// }
import Link from "next/link";
const UserLink = props => (
  <div>
    <Link href = {"/friendProfile?user="+props.username}>
    <div className="userLinkBox">
    <img className="profilePic" src={props.image}></img>
    <div className="userInfo">
        <p className="userLinkusername">{props.username}</p>
    </div>
    </div>
    </Link>

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
        padding-left: 2px;
        padding-top: 1px;
        padding-bottom: 2px;
        margin-bottom: 2px;
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