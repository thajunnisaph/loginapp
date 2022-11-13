import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './CartButton.module.css';
const CartButton = (props) =>{
return(
    <button className={classes.button}>
        <span className={classes.icon}>
         <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>
)

}
export default CartButton;