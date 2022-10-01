import React, { Component } from 'react'

export default class Chair extends Component {

  renderChair = () => {
    return this.props.rowChair.danhSachGhe.map((chair, index) => {
      let styleSelected = '';
      let disable = false;
      if (chair.daDat) {
        styleSelected = 'gheDuocChon'
        disable = true
      }
      // let styleReserved = ''
      // let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangdat => gheDangdat.soGhe === ghe.soGhe)
      // if(indexGheDangDat !== -1){
      //   styleReserved = 'gheDangChon'
      // }

      return <button onClick={() => { alert(1) }}
        disabled={disable} key={index} className={`ghe ${styleSelected}`}>
        {chair.soGhe}
      </button>
    })
  }

  renderNumberRow  = () => {
    return this.props.rowChair.danhSachGhe.map((hang,index) => {
      return <button className='rowNumber' key={`hang ${index}`}>
        {hang.soGhe}
      </button>
    })

  }
  renderRowChair = () => {
    console.log(this.props)
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
      <div className='text-left ml-5 mt-3' style={{ fontSize: 18 }}>
        {this.renderRowChair()}
      </div>
    )
  }
}
