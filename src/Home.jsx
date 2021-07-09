import React from 'react';
import web from '../src/images/grow.svg'
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name='Grow Your Business With' imgsrc={web} visit='/services' btname='Get Started' />
        </>
    )
};

export default Home;