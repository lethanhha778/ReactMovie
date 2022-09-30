import React, { Component } from 'react'
import { connect } from 'react-redux';


 class ProductItem extends Component {
    render() {
        let { movies } = this.props
        return (
            <div>
                <div className="card" >
                    <img src={movies.image} className="card-img-top" style={{ cursor: 'pointer' }} alt="..." />
                    <div className="card-body">
                        <div className='title'>
                             <h5 className="card-title" style={{color:'#43464b'}}>{movies.name}</h5> <span className='btn-age'>{movies.age}</span>
                        </div>                  
                        <p style={{marginBottom:8}}><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </p>
                        <button  onClick={() => { 
                            const action ={
                                type:'CHON_PHIM',
                                phim: movies.name
                            }
                            this.props.dispatch(action)
                        }}
                        className="custom-btn btn-3 add"  data-bs-toggle="modal" href="#exampleModalToggle2"><span>Mua Vé</span></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default  connect()(ProductItem)