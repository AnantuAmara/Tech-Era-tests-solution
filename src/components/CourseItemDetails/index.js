import './index.css'

const CourseItemDetails = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-details-card">
      <div className="course-details-container">
        <img className="course-details-img" src={imageUrl} alt={name} />
        <div className="info-container">
          <h1 className="title">{name}</h1>
          <p className="info">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseItemDetails
