import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './RecipeEditor.css'

// const TYPES = [
//   'vegan',
//   'vegetarian',
//   'pescatarian'
// ]

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, colour, photo } = props

    this.state = {
      firstName,
      lastName,
      colour,
      photo,
    }
  }

  updateFirstName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus() //???????
    }
    this.setState({
      firstName: this.refs.title.value
    })
  }

  updateLastName(text, medium) {
    this.setState({
      lastName: text
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }



  // setType(event) {
  //   this.setState({
  //     vegan: event.target.value === 'vegan',
  //     vegetarian: event.target.value === 'vegetarian',
  //     pescatarian: event.target.value === 'pescatarian'
  //   })
  // }

  saveStudent() {
    const {
      firstName,
      lastName,
      colour,
      photo,
    } = this.state

    const student = {
      firstName,
      lastName,
      colour,
      photo,
    }

    console.log(student)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="firstName"
          className="firstName"
          placeholder="FirstName"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <input
          type="text"
          ref="lastName"
          className="lastName"
          placeholder="LastName"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <input
          type="text"
          ref="colour"
          className="colour"
          placeholder="Colour"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />

        {/* {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
            {type}
          </label>
        })} */}

        <div className="actions">
          <button className="primary" onClick={this.saveRecipe.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default StudentEditor
