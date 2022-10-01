import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    state ={
        movie:{}
    }
    chooseMovie =(movieClick)=>{
        this.setState({
            movie:movieClick,
        })
    }

    renderMovie = () => {
        return this.props.movies.map((movie) => {
            return <div className="col-12 col-sm-6 col-lg-4 col-xl-4 pb-4"
                key={movie.id}>
                <ProductItem movies={movie} chooseMovie={this.chooseMovie} />
            </div>
        })
    }
    render() {
        return (
            <div className="container py-2 ">
                <div>
                    <span className='title-movie'>Phim Đang Chiếu</span>
                </div>
                <div className="row py-2">
                    {this.renderMovie()}
                </div>
            </div>
        )
    }
}
