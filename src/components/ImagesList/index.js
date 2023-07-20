import './index.css'

const ImagesList = props => {
  const {eachImage, onClickImages} = props
  const {imageUrl, thumbnailUrl} = eachImage

  const onClickImage = () => {
    onClickImages(imageUrl)
  }

  return (
    <li className="list-container-thumbnail" onClick={onClickImage}>
      <button type="button" className="list-button">
        <img src={thumbnailUrl} className="thumbnail-images" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesList
