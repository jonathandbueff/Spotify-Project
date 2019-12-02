const Search = props => (
    <div>
        <input type="text" className="searchBar" placeholder="Search"></input>
        <input type="button" className="searchBarBtn" value="Search"></input>
  
      <style jsx>{`
      .searchBarBtn{
        position: relative;
        font-family: console, monospace;
        left: calc(50% / 2 );
        background:#1DB954;
        color: #FFF;
        font-size: 14px;
        border: none;
        border-radius: 500px;
        // padding: 16px 48px 18px;
        -webkit-transition: background 0.4s;
        transition-duration: background 0.4s;
      }
      .searchBarBtn:hover {
        background: black;
        color: #1DB954;     
      }
        .searchBar{
          background-color: grey;
          height: 20px;
          padding-left: 5px;
          width: calc(100% - 22px);
          border-radius: 100px;
          border: none;
          color: white;
        }
        ::placeholder{
          color: white;
        }
        .searchBar:hover {
          background: white;
          color: black;
        }
        :hover::placeholder{
          color:black;
        }
        
      `}
      </style>
    </div>
  );
  
  export default Search;