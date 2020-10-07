import React from "react";
import "./body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from './SongRow'


export default function Body({ spotify}) {
  
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:6bHi7io5Tgl8GXofNYnAvx`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
<div className="body_icons">
<PlayCircleFilledIcon 
className="body_shuffle"
onClick={playPlaylist}
/>
<FavoriteIcon fontSize="large"/>
<MoreHorizIcon/>

</div>
       {discover_weekly?.tracks?.items.map(item=>(

<SongRow 
playSong={playSong}
track={item.track}/>
       ))}
      </div>
    </div>
  );
}
