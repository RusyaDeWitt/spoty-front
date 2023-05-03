export type User = {
  id: number,
  username: string,
  password: string,
  email: string,
}

export type Artist = {
  id: number,
  name: string,
  biography: string,
}


export type Album = {
  id: number,
  title: string,
  release_date: string,
  artist: Artist,
}


export type Song = {
  id: number,
  title: string,
  duration: string,
  album: Album,
}


export type PlayList = {
  id: number,
  user: string,
  name: string,
  songs: Song[],
}