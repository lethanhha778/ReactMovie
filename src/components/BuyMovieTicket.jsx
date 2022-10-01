import React, { Component } from 'react'
import { connect } from 'react-redux';

import dataChair from '../data//dataChair.json'
import Chair from './Chair'
import TickectInfo from './TickectInfo'

 class BuyMovieTicket extends Component {

    renderHangGhe = () => {
        return dataChair.map((rowChair, index) => {
            return <div key={index} >
                <Chair rowChair={rowChair} indexRowChair={index} />
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel2">Chọn Ghế</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className='ticket'>
                                    <button className='gheDangChon'></button> <h6 className='font-weight-bold'> Ghế Đang Chọn</h6>
                                    <button className='gheDuocChon'></button> <h6 className='font-weight-bold'> Ghế Đã Bán</h6>
                                    <button className='gheDoi'></button><h6 className='font-weight-bold'>Ghế Đôi</h6>
                                    <button className='ghe'></button><h6 className='font-weight-bold'>Có Thể Chọn</h6>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <div className='mt-1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <div className='screen'></div>
                                                {this.renderHangGhe()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pb-4">                           
                                <button 
                                 className="custom-btn btn-3"
                                    data-bs-target="#exampleModalToggle3" data-bs-toggle="modal"><span>Confirm Selection</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <TickectInfo/>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return{ 
        chairLists: rootReducer.movieReducer.chairLists,
        money:rootReducer.movieReducer.money
    }
  }
  export default connect(mapStateToProps)(BuyMovieTicket)
