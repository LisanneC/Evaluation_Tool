import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import StudentItem from './StudentItem'

class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
    return <StudentItem key={index} { ...batch } />
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form");
    // // const { studentId } = this.props.params;
    // const firstName = this.refs.firstName.value;
    // const lastName = this.refs.lastName.value;
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <Title content="Batch # 9" />
        </header>
        <main>
          {this.props.students.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({
  students
})

export default connect(mapStateToProps)(BatchesContainer)
