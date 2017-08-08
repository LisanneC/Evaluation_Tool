import React, { PureComponent } from 'react'
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
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

export default BatchesContainer
