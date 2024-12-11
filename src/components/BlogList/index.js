// Write your JS code here
// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div>
      <ul className="u-list">
        {blogsList.map(each => (
          <BlogItem item={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}


export default BlogList
