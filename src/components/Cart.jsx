import {getFirestore} from '../firebase';
import { Badge,Table,Button,InputGroup,FormControl} from 'react-bootstrap';
import React, {useState,useEffect,useContext,createContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import DelButton from './DelButton';
import firebase from 'firebase/app';
import '@firebase/firestore';


const Cart = () => {
    const {carts,cartlength,clear,total,removeitem}=useContext(CartContext);
    const [order,setOrder]=useState();
    const [orderid,setOrderid]=useState();
    const [error,setError]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [name,setName]=useState();



 function onPhoneChange(evt) { 
    setPhone(evt.target.value);
  }
 function onNameChange(evt) {
    setName(evt.target.value);
  }
 function onEmailChange(evt) {
    setEmail(evt.target.value);
  }





let goodarray=[];
let copyarray=[];
let ListTemplate;
let i=0;
    useEffect(()=>{
setOrder(
    {
        buyer:{name,phone,email},
        items:goodarray,
        date:firebase.firestore.Timestamp.fromDate(new Date()),
total:total()
    }
)
    },[email] )

    if(cartlength()>0){
let itemidarray=[];

        while(i<carts.length)
        {
copyarray[i]=carts[i];
itemidarray[i]=carts[i].itemid;
i++;
        }


itemidarray = [...new Set(itemidarray)];
        i=0;
        let id;
        let j=0;
        let price;
        let name;
while(i<itemidarray.length)
{
   let  cantidad=0;
    for (j=0;j<copyarray.length;j++)
    {
  if(copyarray[j].itemid==itemidarray[i])
        {
cantidad=copyarray[j].count+cantidad;
price=copyarray[j].price;
name=copyarray[j].title;
        }

    }

id=itemidarray[i];
goodarray.push({id,name,cantidad,price})
console.log("federico",copyarray)

i++;
}






    const  InsertOrder =({goodarray})=>{




        console.log('Inside InsertOrder function'+order);
        const db=getFirestore()
            const orderDb=db.collection('orders')
        orderDb.add(order).then(({id})=>
            {
                setOrderid(id); //SUCESS
            }).catch(err=>{
                    setError(err);
                }).finally(()=>{

                });


        alert("Enhorabuena su pedido ha sido ingresado, correo de confirmación sera enviado a la brevedad");
    }



         ListTemplate=goodarray.map((element)=>(<tr key={element.id}><td>{element.name}</td><td>{element.cantidad}</td><td>{element.price}</td><td><DelButton itemid={id}/></td></tr>));

console.log("goodarray:"+goodarray[0].id);
        return (
        <>
       <Table striped bordered hover variant='dark'>
  <thead>
    <tr>
      <th>Item</th>
      <th>Cantidad</th>
      <th>Precio Unitario</th>
      <th>Quitar Item</th>
    </tr>
  </thead>
  <tbody>
      {ListTemplate}
        <tr>
      <td>Total a Pagar:</td>
      <td colSpan='1'></td>
      <td colSpan='1'></td>
    <td>{total()}</td>
    </tr>
  </tbody>
            </Table>






   </>
    )
    }
    else
    {
        return(

            <Badge variant='secondary'>Vuestro Carro se encuentra vacio por favor escoger items


                <Link  to={'/categories'}>

                <button>Volver</button>
                    </Link>
                    </Badge>

        )



    }


}


export default Cart;