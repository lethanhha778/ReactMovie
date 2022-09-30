import React, { Component } from 'react'
import dataMovie from '../data/dataMovie.json'
import dataChair from '../data//dataChair.json'

import Banner from './Banner'
import Header from './Header'
import ProductList from './ProductList'
import BuyMovieTicket from './BuyMovieTicket'
import Footer from './Footer'


export default class HomeCinema extends Component {
   
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <ProductList movies={dataMovie} />
                <BuyMovieTicket dataChair={dataChair}/>         
                <Footer />
            </div>

        )
    }
}
