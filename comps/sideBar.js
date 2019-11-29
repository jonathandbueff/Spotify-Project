import Search from '../comps/search';
const SideBar = props => (
  <div>
    <div className="sideBarBox">
        <h3>Search</h3>
        <Search className="seachBarMain"/>
        <h3>Friends</h3>
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