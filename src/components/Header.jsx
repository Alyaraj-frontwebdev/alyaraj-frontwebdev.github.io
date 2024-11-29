import React from 'react'
import './Header.css'

function Header() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav class="navbar navbar-expand-lg bg-trasparent">
                            <div class="container-fluid">
                                <a class="navbar-brand text-white " style={{fontSize: '2rem'}} href="#">Portfolio.</a>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div class="offcanvas-header ">
                                        <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">Portfolio.</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <ul class="navbar-nav justify-content-end flex-grow-1">
                                        <li class="nav-item">
                                                <a class="nav-link text-white text-lg" href="#home">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white text-lg" href="#about">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white text-lg" href="#project">Projects</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white text-lg" href="#work">Contact me</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="navbar-toggler border-0 outline-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon "></span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header