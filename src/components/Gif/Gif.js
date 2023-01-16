import './Gif.css'

const Gift = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="gif">
      <h4>{title}</h4>
      <img src={url} />
    </a>
  )
}

export default Gift
