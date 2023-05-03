import { useState, useEffect } from 'react';
import axios from 'axios'
import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { PlayList } from '../../types';
import { PlayListItem } from '../../components/Playlist/Playlist';
import MenuItem from 'antd/es/menu/MenuItem';
import './styles.css'


export function SiderLayout () {
  const [playlists, setPlayLists] = useState<PlayList[]>()

  async function fetchPlayListDetail () {
    try {
      const tempAxios = axios.create({
        baseURL: 'http://127.0.0.1:8000',
      });
      const response = await tempAxios.get("api/v1/playlists/");
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
  
  
  useEffect(() => {
    fetchPlayListDetail()
  }
  ,[])


  return (
    <div style={{ width: 450 }}>
              <div className='sider__header'>
          <div className='sider__header__item'>
            <HomeOutlined style={{fontSize: '40px'}}/>
            <h2>Главная</h2>
          </div>
          <div className='sider__header__item'>
            <SearchOutlined style={{fontSize: '40px'}} />
            <h2>Поиск</h2>
          </div>
        </div>
    <Menu
      style={{background: '#121212', color: 'white', marginRight: '20px !important', height: '90vh'}} mode="inline"
      inlineCollapsed={true}
    > 
      <h3 style={{marginLeft: '20px', marginBottom: "0px"}}>Плейлисты</h3>
      {playlists?.map((item) => <MenuItem key={item.name} className='menu__item'><PlayListItem name={item.name} /></MenuItem> )}
    </Menu>
  </div>
  )
}