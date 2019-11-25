import Link from "next/link";

const Header = () => (
  <div className="headerStyle">
    <div className="headerContainer">
      <Link href="/">
        <a className="linkStyle">Spotify Analytics</a>
      </Link>
      <div className="dropdown">
        <div className="spanBarBox">
        <span className="spanBar"></span> 
        <span className="spanBar"></span> 
        <span className="spanBar"></span>
        </div> 
        <div className="dropdownContent">
          <h2> HI</h2>
        </div>
      </div>
    </div>
    
    <style jsx>
      {`
      .headerStyle{
        position: absolute;
        background: black;
        height: 50px;
        top: -1px;
        left: -1px;
        right: -1px;
        border: 1px solid #DDD;
      }
      .headerContainer{
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        margin-top: 5px;
        text-align: center;
      }
      .linkStyle{
        color: white;
        text-decoration: none;
        font-family: console, monospace;
      }
      .dropdown{
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 15px;
        margin-right: 10px;
        color: white;
        height: 38px;
      }
      .dropdownContent {
        display:none;
        position: relative;
        top:15px;
        right: -15px;
        width: 160px;
        background-color: black;
        color: #1DB954;
      }
      .spanBar{
        display: block;
        box-sizing: border-box;
        background-color: white;
        width: 19px;
        height: 3px;
        margin-bottom: 3px;
        margin-top: 3px;
        border-radius: 3px;
        // z-index:1000;
      }
      .spanBarBox{
        float:right;
      }
      .dropdown:hover .spanBar{
        background-color: #1DB954;
      }
      .dropdown:hover .dropdownContent {
        display: block;
      }
      
      `}
    </style>
  </div>
);

export default Header;
