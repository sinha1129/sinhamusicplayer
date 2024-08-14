import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {songDetails, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const deleteSong = () => {
    onDeleteSong(id)
  }

  return (
    <li className="list">
      <div className="item-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-and-genre">
          <p className="song">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-icon"
          onClick={deleteSong}
          data-testid="delete"
        >
          <AiOutlineDelete size="20" />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
