import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import StudentItem from './StudentItem'

class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
    return <StudentItem key={index} { ...batch } />
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <Title content="Batch # 9" />
        </header>
        <main>
          {this.props.students.map(this.renderBatch)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({
  students
})

export default connect(mapStateToProps)(BatchesContainer)
