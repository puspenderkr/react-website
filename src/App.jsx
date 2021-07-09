import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import { Redirect, Route, Switch } from 'react-router';

const App = () => {
    return (
        <>
        <Navbar />
         <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/contact' component={Contact} />
             <Route exact path='/services' component={Services} />
             <Route exact path='/about' component={About} />
             <Redirect to='/' />
         </Switch>
         <Footer />
         </>
    )
};

export default App;