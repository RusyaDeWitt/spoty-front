import './styles.css'

type PlayListItemProps = {
  name: string
}

export function PlayListItem({name}: PlayListItemProps) {
  return (
    <div className="playlist__item">
      <img src="https://i.scdn.co/image/ab67706f000000026422cb2c60dc3fc709558b6e" alt="cover" width="40px" height="70px" />
      <h4 style={{color: 'white'}}>{name}</h4>
    </div>
  )
}