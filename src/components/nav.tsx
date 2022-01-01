import React from "react";
import {Link} from "react-router-dom";
// import "./NavBar.scss"

const NavBar = () => {

    return (
        <div className="navBar" style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
            <div className="logo">
                <h1 style={{ color: 'turquoise', marginLeft: '-10px' }}>FOOD4MOOD</h1>
                <p style={{ marginLeft: '20px', marginTop: '-10px' }}>Share your mood to find your food.</p>
            </div>
            <div className="nav" style={{ display: 'flex', marginTop: '30px', marginRight: '20px' }}>
                <Link  to="/" style={{ textDecoration: 'none', marginLeft: '20px', fontSize: '22px', color: '#000' }} >
                   BOOST MOOD
                </Link>
                <Link to="/share" style={{ textDecoration: 'none', marginLeft: '20px', fontSize: '22px', color: '#000' }} >
                   SHARE MOOD
                </Link>
                <Link to="/community" style={{ textDecoration: 'none', marginLeft: '20px', fontSize: '22px', color: '#000'}} >
                   COMMUNITY
                </Link>
            </div>
        </div>
    )
}

export default NavBar