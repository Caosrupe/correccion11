import React, {useContext} from 'react';
import {CartContext} from './CartContext';




export const DelButton = ({itemid}) => {
const {removeitem}=useContext(CartContext);
    console.log("Estoy en DelButton con itemid:"+itemid);
    
    return(
    <button  onClick={()=>removeitem({itemid})}>Eliminar Item</button>
    )
};

export default DelButton;