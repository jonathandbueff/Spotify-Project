import Search from '../comps/search';
import UserLink from '../comps/userLink';
import Link from "next/link";
const SideBar = props => (
  <div>
    <div className="sideBarBox">
        <h3>Search</h3>
        <Search className="seachBarMain"/>
        <h3>Other Users</h3>
        <ul className="otherUsersList">
        {props.data.allUsers.map(p => (<li className ="userListItem" key={p.username}><UserLink {...p}/></li>))}
        </ul>
    </div>

    <style jsx>{`
    .searchBarMain{
      position:fixed;
    }
    .sideBarBox{
    padding: 0;
    margin: 0;
    height: 100vh;
    color: #1DB954;
    background: black;
    position: fixed;
    width: 25%;
    padding-left: 5px;

  }
    `}
    </style>
  </div>
);

export default SideBar;