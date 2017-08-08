import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class StudentItem extends PureComponent {
  static PropTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    //colour:
  }
  render() {
    const { firstName, lastName, colour } = this.props

    return(
      <article className="batch">
        <div>
          { firstName } { lastName } colour: { colour }
        </div>
      </article>
    )
  }
}

export default StudentItem
