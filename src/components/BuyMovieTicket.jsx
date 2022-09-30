import React, { Component } from 'react'
import {connect} from 'react-redux'

class BuyMovieTicket extends Component {
    
    renderCol = () => {
        return this.props.dataChair.map((chair) => {
            return <span className='sideS col-1 ' key={chair.hang}>{chair.hang}</span>
        })
    }
    renderRow = () => {
        return this.props.dataChair.map((chairs, index) => {
            if (index === 0) {
                return chairs.danhSachGhe.map((chair) => {
                    return <span key={chair.soGhe} className='col-1 my-2 btn-row text-center num' >{chair.soGhe}</span>              
                })
            }
        })
    }
    renderChair = () => {
        return this.props.dataChair.map((chairs, index) => {
            if (index > 0) {
                return chairs.danhSachGhe.map((chair) => {
                    return <input key={chair.soGhe}  onClick={() => { 
                        const action ={
                            type:'CHON_GHE',
                            ticket: chair.soGhe
                        }
                        this.props.dispatch(action)
                     }}
                    className="col-1" type="checkbox" name='ticket' value={chair.soGhe} />
                })
            }
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
                                    <button style={{ backgroundColor: 'rgb(21, 185, 21)' }}></button> <h6 className='font-weight-bold'> Selected Seat</h6>
                                    <button style={{ backgroundColor: 'red' }}></button> <h6 className='font-weight-bold'> Reserved Seat</h6>
                                    <button tyle={{ backgroundColor: 'white' }}></button><h6 className='font-weight-bold'>Empty Seat</h6>
                                </div>

                                <h5 className='text-center my-4' style={{ backgroundColor: 'rgba(251, 75, 2, 1)', color: 'white' }}>
                                    Please Select your Seats NOW!
                                </h5>
                                <div className="container check">
                                    <div className="row">
                                        <div className="col-12 col-xl-12 m-auto">
                                            <div className="row ">
                                                <div className="col-1 col-xl-1">
                                                    {this.renderCol()}
                                                </div>
                                                <div className="col-10 col-xl-11">
                                                    <div className="row">
                                                        {this.renderRow()}
                                                        {this.renderChair()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pb-4">
                                <button className="custom-btn btn-4 back" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" 
                                        style={{ marginRight: 20 }}>Back To Buy Tickets
                                </button>
                                <button className="custom-btn btn-3"  
                                data-bs-target="#exampleModalToggle3" data-bs-toggle="modal"><span>Confirm Selection</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered  modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Tickects</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body ">
                                <table className="table table-dark table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Tên Phim</th>                   
                                            <th scope="col">Number of Seats</th>                   
                                            <th scope="col">Seats</th>
                                            <th scope="col">Total Money</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="table-info">{this.props.movie} </td>
                                            <td className="table-info">{(this.props.chair).length}</td>
                                            <td className="table-info">{this.props.chair}</td>
                                            <td className="table-info">
                                                {(((this.props.chair).length)*75000).toLocaleString()}vnđ
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            </div>
                            <div className="modal-footer">
                                <button type="button"className="custom-btn btn-3"
                                        data-bs-dismiss="modal" aria-label="Close" 
                                        style={{ marginRight: 20 }}><span>Finsh</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return{
        movie: rootReducer.movieReducer,
        chair: rootReducer.chairReducer
    }
   
}

const ComponentMovieRedux = connect(mapStateToProps)(BuyMovieTicket)
export default ComponentMovieRedux;