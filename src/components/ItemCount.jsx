import {ButtonGroup,Table} from 'react-bootstrap';
import React, {useState,useContext} from 'react';
import {CartContext} from './CartContext';
import {useParams} from "react-router-dom";



const ItemCount=({productname,stock,initial,productid,itemprice})=>{
const [count,setCount]=useState(initial);
const {itemid}=useParams();
const {additem,carts,cartlength}=useContext(CartContext);
const add=()=>{

        if(count+1>stock){
          alert("Superaste la cantidad de items en stock");
        }
        
        else{
          setCount(count+1);
        }
      };

const sub=()=>{
    
        if(count === 0)
          alert("Debes agregar al menos un item al carrito");
        
        else
          setCount(count-1);
        };
        
        console.log("ver contenido de carts",carts.map(cart=>cart.productname));
        console.log("New cartlength function",cartlength());
        
        return (
        <>
          <p></p>
          <p></p>
            <ButtonGroup>
              <Table striped bordered hover className="tabla" size="sm" align="center" >
                <thead className="thead">
                  <tr>
                    <th></th>
                    <th>{productname}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="body">
                  <tr>
                    <td>
                      <button className="botoncito2"  onClick={sub}>-</button>
                    </td>
                    <td className="counter">{count}</td>
                    <td>
                      <button className="botoncito1" onClick={add}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td align="center">
                      <button className="botoncito3" disabled={count===0} id="but2" onClick={()=>additem(productname,itemid,count,itemprice)}>Agregar a carrito</button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </ButtonGroup>
        </>
      );
};

export default ItemCount;