import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const { cartItems } = props;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Small Shopping Cart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cart" >Cart {' '} 
                                {cartItems ? (
                                    <button className="badge">{cartItems}</button>
                                ) : ('')
                            }
                           </Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Signin</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Header;