import Git from '../Gif/Gif'
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Git key={id} id={id} title={title} url={url} />
      ))}
    </div>
  )
}

export default ListOfGifs
