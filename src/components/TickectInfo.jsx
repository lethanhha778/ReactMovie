import React, { Component } from 'react'
import { connect } from 'react-redux'

class TickectInfo extends Component {
    totalTicket = () => {
        console.log(this.props.chairLists)
        return this.props.chairLists.reduce((total, ticket) => {
            return total += ticket.gia
        }, 0)
    }
    render() {
        console.log(this.totalTicket());
        return (
            <div className="modal fade " id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex={-1}>
                <div className="modal-dialog modal-fullscreen-lg-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalToggleLabel">Tickects</h4>    
                        </div>
                            <div className="modal-body ">
                                <table className='table table-bordered text-center'>
                                    <thead>
                                        <tr style={{fontSize:20} }>
                                            <td>Số Ghế</td>
                                            <td>Giá</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.chairLists.map((ghe, index) => {
                                            return <tr key={index}>
                                                    <td >{ghe.soGhe}</td>
                                                    <td>{(ghe.gia).toLocaleString()} <sup>vnđ</sup></td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                                <div className="modal-footer">
                                    <span style={{ fontWeight: 'bold' }}>Tổng Tiền: {this.totalTicket().toLocaleString()}<sup>vnđ</sup></span>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-info mr-5"
                                    data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Back</button>
                                    <button onClick={() => {
                                        const action = {
                                            type: 'RS_STATE'
                                        }
                                        this.props.dispatch(action)
                                    }}
                                        type="button" className="custom-btn btn-3"
                                        data-bs-dismiss="modal" aria-label="Close"
                                        style={{ marginRight: 20 }}>
                                        <span>Finsh</span>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        chairLists: rootReducer.movieReducer.chairLists
    }
}
export default connect(mapStateToProps)(TickectInfo)


