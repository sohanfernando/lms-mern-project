import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div>
      <h2>Learn from the best</h2>
      <p>Discover or top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>

      <Link to={'/'}>Show all courses</Link>
    </div>
  )
}

export default CoursesSection