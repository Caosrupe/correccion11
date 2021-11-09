import React, {useContext} from 'react';
import {Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";


const CartWidget = () => {
        const divStyles = {color: "#60269e", margin: "25px"}
        const {cartlength}=useContext(CartContext);
            console.log("Valor Total en Widget");
            console.log("cargando CartWidget");


            return (
        <div style={divStyles}>
            <Nav.Link href='/#'>{cartlength()>0 && cartlength()}
            <Link to={'/cart'}>
            <FontAwesomeIcon icon={faShoppingCart}/></Link>
            </Nav.Link>
        </div>
    )
}


export default CartWidget