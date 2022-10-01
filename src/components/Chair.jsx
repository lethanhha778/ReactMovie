import React, { Component } from 'react'
import { connect } from 'react-redux';

class Chair extends Component {

  renderChair = () => {
    return this.props.rowChair.danhSachGhe.map((chair, index) => {
      let styleSelected = '';
      let disable = false;
      if (chair.daDat) {
        styleSelected = 'gheDuocChon'
        disable = true
      }
      let styleReserved = ''
      let indexReserved = this.props.chairLists.findIndex(reserved => reserved.soGhe === chair.soGhe)
      if(indexReserved !== -1){
        styleReserved = 'gheDangChon'
      }

      return <button onClick={() => { 
        const action ={
          type:'DAT_VE',
          ticketMovie:chair
      }
      console.log(chair)
      this.props.dispatch(action)
      }}
        disabled={disable} key={index} className={`ghe ${styleSelected} ${styleReserved}`}>
        {chair.soGhe}
      </button>
    })
  }

  renderNumberRow  = () => {
    return this.props.rowChair.danhSachGhe.map((hang,index) => {
      return <button className='rowNumber ' key={`hang ${index}`}>
        {hang.soGhe}
      </button>
    })

  }
  renderRowChair = () => {
    if (this.props.indexRowChair === 0) {
      return <div className='ml-4'>
         {this.props.rowChair.hang} {this.renderNumberRow()}
      </div>
    }
    else {
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
  return{ 
    chairLists:rootReducer.movieReducer.chairLists
  }
}
export default connect(mapStateToProps)(Chair)

