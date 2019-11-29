const Song = props => (
    <div className="songMain">
    <div className="container songBoxTop">
        <p className="titleHere">TITLE</p>
        <p className="artistHere">Artist</p>
        <p className="listensHere">Listens</p>
    </div>
    <style jsx>{`
    .titleHere{
      display: inline-block;
    }
    .artistHere{
      margin:0;
      padding:0;
      display: inline-block;
      padding-left: 15px;
    }
    .listensHere{
      margin:0;
      padding:0;
      float:right;
      padding-right: 10px;
    }
    .container{
      padding:0;
      margin:0;
    }
    .titleHere{
      padding: 0;
      margin: 0;
    }
    
    `}
    </style>
    </div>
    
  );
  
  export default Song;