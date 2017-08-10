import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './StudentItem.css';


class StudentItem extends PureComponent {
  static PropTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    colour: PropTypes.string,
    photo: PropTypes.string,
  }
  render() {
    const { firstName, lastName, colour, photo } = this.props

    return(
      <article className="card">
        <div className="container">
          <img src={photo} alt="student_photo" height="270" width="242"/>
          <p>{ firstName } { lastName }</p>
          <p>colour: { colour }</p>
          {/* <button classname="remove-student">&times;</button> */}
        </div>
      </article>
    )
  }
}

export default StudentItem
