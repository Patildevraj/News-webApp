import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href=" ">NewsAggregator</a>
            </div>
        </nav>
    );
};

export default Navbar;