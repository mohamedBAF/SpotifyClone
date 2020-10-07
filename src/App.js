import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import {getTokenFromUrl} from './spotify'
import { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './player';
import  { useDataLayerValue } from './DataLayer';


function App() {

  const [{user,token,playlists,discover_weekly },dispatch]=useDataLayerValue()
  
  const spotify = new SpotifyWebApi()
  
  useEffect(() => {
    
  const hash =getTokenFromUrl()
  //console.log("access token",token)
  window.location.hash=""
  const _token = hash.access_token

  if (_token){
    dispatch({
      type:"SET_TOKEN",
      token:_token
    })
    
    
   spotify.setAccessToken(_token)
    spotify.getMe().then(user =>{
      
      dispatch({
        type:"SET_USER",
        user:user
      })

    }
    )
    spotify.getPlaylist("6bHi7io5Tgl8GXofNYnAvx").then(response =>{
      console.log(response)
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly:response
      })

    }
    )
    
    spotify.getMyTopArtists().then((response) =>
    dispatch({
      type: "SET_TOP_ARTISTS",
      top_artists: response,
    })
  );
  dispatch({
    type: "SET_SPOTIFY",
    spotify: spotify,
  });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });
  }
  }, []); 
  console.log(user)
  console.log(token)
  console.log(playlists)
  console.log(discover_weekly)
  return (
    
    <div className="App">
      {
      token ? 
      
<Player spotify={spotify} discover_weekly={discover_weekly}/> :
 <Login/>
    }
   
    </div>
  );
}

export default App;
