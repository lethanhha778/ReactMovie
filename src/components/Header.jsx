import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light py-3">
                <div className="container">
                    <a className="navbar-brand" href="#!"><img style={{width:300}} src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:200}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="#!">Home</a>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#!">Phim</a>
                            </li>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Góc Điện Ảnh
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#!">Thể Loại</a></li>
                                    <li><a className="dropdown-item" href="#!">Diễn Viên</a></li>               
                                    <li><a className="dropdown-item" href="#!">Đạo Diễn</a></li>
                                </ul>
                            </li>
                         
                        </ul>
                        <form className="d-flex" role="search">
                            <i style={{fontSize:14, marginTop:4}} className="fa-solid fa-user" /><a href='#!' className='user'>Đăng Nhập</a>
                        </form>
                    </div>
                </div>
            </nav>

        )
    }
}
