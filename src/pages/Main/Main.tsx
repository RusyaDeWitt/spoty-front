import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Album, Artist, PlayList } from '../../types';
import './styles.css'

export function Main () {

  const [albums, setAlbums] = useState<Album[]>()
  const [playlists, setPlayLists] = useState<PlayList[]>()
  const [artists, setArtists] = useState<Artist[]>()
  const navigate = useNavigate ();

  async function fetchAlbums () {
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.get(`/api/v1/albums/`);
      console.log("Request successful!");
      setAlbums(response.data)
      
    } catch (error: any) {
      if (error.response) {
        console.log(error.reponse.status);
      } else {
        console.log(error.message);
      }
    }
  }

  async function fetchPlaylists () {
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.get(`/api/v1/playlists/`);
      console.log("Request successful!");
      setPlayLists(response.data)
      
    } catch (error: any) {
      if (error.response) {
        console.log(error.reponse.status);
      } else {
        console.log(error.message);
      }
    }
  }

  async function fetchArtists () {
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.get(`/api/v1/artists/`);
      console.log("Request successful!");
      setArtists(response.data)
      
    } catch (error: any) {
      if (error.response) {
        console.log(error.reponse.status);
      } else {
        console.log(error.message);
      }
    }
  }
  
  
  useEffect(() => {
    fetchAlbums() 
    fetchPlaylists()
    fetchArtists()
  },[])
  
  return (
    <div style={{marginLeft: "200px", color: 'white'}}>
      <h1 style={{fontSize: '50px', marginBottom: '50px'}}>Добрый день</h1>
      <h2>Альбомы</h2>
      <div className="playlists">
        {albums?.map((item) => {
          return <div className='playlist_item'>
            <img src="https://pbs.twimg.com/media/EtrebXoU0AAEtmb.jpg" alt="cover" width="150px" height="150px" />
            <h4>{item.title}</h4>
          </div>
        })}
      </div>
      <h2>Плейлисты</h2>
      <div className="playlists">
        {playlists?.map((item) => {
          return <div className='playlist_item' onClick={() => navigate(`/playlist/${item.id}`)}>
            <img src="https://i.scdn.co/image/ab67706f000000026422cb2c60dc3fc709558b6e" alt="cover" width="150px" height="150px" />
            <h4>{item.name}</h4>
          </div>
        })}
      </div>
      <h2>Артисты</h2>
      <div className="playlists">
        {artists?.map((item) => {
          return <div className='playlist_item'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/billie-eilish-mega707061-001-1602700090.jpg?resize=980:*" alt="cover" width="150px" height="150px" />
            <h4>{item.name}</h4>
          </div>
        })}
      </div>
    </div>
  )
}