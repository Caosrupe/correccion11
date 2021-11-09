import {Button,ButtonGroup,Table} from 'react-bootstrap';
import React, {useState,useContext} from 'react';
import {CartContext} from './CartContext';
import {useParams} from "react-router-dom";



const ItemCount=({productname,stock,initial,productid,itemprice})=>{
const [count,setCount]=useState(initial);
const {itemid}=useParams();
const {additem,additem2,carts,cartlength,isInCartIndex,removeitem}=useContext(CartContext);
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
            <ButtonGroup aria-label="Basic example">
              <Table striped bordered hover className="tabla" size="sm" align="center" >
                <thead className="thead">
                  <tr>
                    <th></th>
                    <th>{productname}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody style={{ width: '18rem' }}>
                  <tr>
                    <td>
                      <Button className="botoncito"  onClick={sub}>-</Button>
                    </td>
                    <td align="center">{count}</td>
                    <td>
                      <Button className="botoncito" onClick={add}>+</Button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td align="center">
                      <Button className="botoncito" disabled={count===0} id="but2" onClick={()=>additem(productname,itemid,count,itemprice)}>Agregar a carrito</Button>
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