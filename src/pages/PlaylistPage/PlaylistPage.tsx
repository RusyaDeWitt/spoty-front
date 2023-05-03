import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar, List } from 'antd';
import { Song } from "../../types";


export function PlaylistPage(){

  const [songs, setSongs] = useState<Song[]>();
  const { id } = useParams()
  async function fetchPlayListDetail () {
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.get(`/api/v1/playlists/${id}`);
      console.log("Request successful!");
      setSongs(response.data.songs)
      
    } catch (error: any) {
      if (error.response) {
        console.log(error.reponse.status);
      } else {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {fetchPlayListDetail()}, [])

  return (
      <List
      itemLayout="horizontal"
      dataSource={songs}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://cdn.myanimelist.net/images/characters/15/422168.jpg`} />}
            title={<a href="https://ant.design">{item.title}</a>}
          />
        </List.Item>
      )}
      />
  )
}