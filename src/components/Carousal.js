import React from 'react';

export default function Carousal() {
    return (
        <div className="carousel-container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/300x300?burger" className="d-block w-100" style={{ height: '600px', boxShadow: 'none' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300?ocean" className="d-block w-100" style={{ height: '600px', boxShadow: 'none' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300x300?momo" className="d-block w-100" style={{ height: '600px', boxShadow: 'none' }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button className='btn btn-outline-success text-white bg-success' style={{ zIndex: '1' }}>Search</button>
            </div>
        </div>
    );
}
