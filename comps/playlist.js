const Playlist = props => (
    <div className="playlistMain">
    <div className="container playlistBox">
        <p className="titleHere">{props.title}</p>
        <p className="creatorHere">{props.creator}</p>
        <p className="ratingHere">Rating</p>
    </div>
    <style jsx>{`
    .titleHere{
      display: inline-block;
    }
    .creatorHere{
      font-size: 14px;
      margin:0;
      padding:0;
      display: inline-block;
      padding-left: 15px;
      color: #1DB954;
    }
    .ratingHere{
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
    .playlistBox{
        font-family: console, monospace;
        padding-bottom: 5px;
    }
    `}
    </style>
    </div>
    
  );
  
  export default Playlist;