import './index.css'

const ThumbnailItem = props => {
  const {imageDetails} = props
  const {thumbnailUrl, thumbnailAltText} = imgDetails
  const onClickThumbnailItem = () => {
    setActiveThumbnail(id)
  }
  return (
    <div>
      <li>
        <button type="button" onClick={onClickThumbnailItem}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
