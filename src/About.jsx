import React from 'react';
import Common from './Common';
import web from '../src/images/about.svg'

const About = () => {
    return (
         <Common name='Welcome TO About Page' imgsrc={web} visit='/contact' btname='Contact Now' />
    )
};

export default About;