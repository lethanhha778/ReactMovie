import React, { Component } from 'react'
import { connect } from 'react-redux';

class Chair extends Component {

  renderChair = () => {
    return this.props.rowChair.danhSachGhe.map((chair, index) => {
      let styleChair = '';
      let disable = false;
      if (chair.daDat) {
        styleChair = 'gheDuocChon'
        disable = true
      }
      let indexChair = this.props.chairLists.findIndex((indexChairList) =>
        indexChairList.soGhe === chair.soGhe)
      if (indexChair !== -1) {
        styleChair = 'gheDangChon'
      }
      return <button onClick={() => {
        const action = {
          type: 'BOOK_TICKET',
          ticketMovie: chair
        }
        this.props.dispatch(action)
      }}
        disabled={disable} key={index}
        className={`ghe ${styleChair}`}>
        {chair.soGhe}
      </button>
    })
  }
  renderRowChair = () => {
    if (this.props.indexRowChair > 0) {
      return <div>
        {this.props.rowChair.hang} {this.renderChair()}
      </div>
    }
  }

  render() {
    return (
      <div className='text-right ml-5 mt-3' style={{ fontSize: 18 }}>
        {this.renderRowChair()}
      </div>
    )
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    chairLists: rootReducer.movieReducer.chairLists
  }
}
export default connect(mapStateToProps)(Chair)

