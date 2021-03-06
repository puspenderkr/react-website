import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className='d-flex align-items-center'>
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className='brand-name'>Puspender's Tech</strong></h1>
                                    <h2 className='my-3'>We are a team of talented Developers.</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="homeimage" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Common;