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
            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered  modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Tickects</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body ">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr style={{fontSize:16}}>
                                        <td>Số Ghế</td>
                                        <td>Giá</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.chairLists.map((ghe, index) => {
                                        return <tr key={index}>
                                                <td >{ghe.soGhe}</td>
                                                <td>{(ghe.gia).toLocaleString()}vnđ</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            <div className="modal-footer">
                                <span style={{ fontWeight: 'bold' }}>Tổng Tiền:</span> <span>{this.totalTicket().toLocaleString()}vnđ</span>
                            </div>
                            <div className="modal-footer">
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


