const Search = props => (
    <div>
        <input type="text" className="searchBar" placeholder="Search"></input>
          
  
      <style jsx>{`
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