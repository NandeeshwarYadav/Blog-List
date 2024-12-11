// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="list-el">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
