import React from 'react';
import './SongRow.css'
function SongRow  ({track,playSong})  {
    return (
        <div className="songRow" onClick={() => playSong(track.id)}>
            <img className="songRow_album" src={track.album.images[0].url}/>
            <div className="songRow_info">
    <h1>{track.name}</h1>
<p>
{track.artists.map((artist) => artist.name).join(", ")}
{track.album.name}
</p>
            </div>
        </div>
    );
}

export default SongRow;
