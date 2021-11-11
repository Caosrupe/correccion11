import { getFirestore } from '../firebase';
import { Table } from 'react-bootstrap';
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import DelButton from './DelButton';
import firebase from 'firebase/app';
import '@firebase/firestore';


const Cart = () => {
    const { carts, cartlength, total } = useContext(CartContext);
    const [order, setOrder] = useState();
    const [orderid, setOrderid] = useState();
    const [error, setError] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [Nombre, setName] = useState();
    const [Apellido, setApellido] = useState();



    function onPhoneChange(evt) {
        setPhone(evt.target.value);
    }
    function onNameChange(evt) {
        setName(evt.target.value);
    }
    function onEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function onApellidoChange(evt) {
        setApellido(evt.target.value);
    }




    let goodarray = [];
    let copyarray = [];
    let ListTemplate;
    let i = 0;
    useEffect(() => {
        setOrder(
            {
                buyer: { Nombre, Apellido, phone, email },
                items: goodarray,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total()
            }
        )
    }, [email])

    if (cartlength() > 0) {
        let itemidarray = [];

        while (i < carts.length) {
            copyarray[i] = carts[i];
            itemidarray[i] = carts[i].itemid;
            i++;
        }


        itemidarray = [...new Set(itemidarray)];
        i = 0;
        let id;
        let j = 0;
        let price;
        let name;
        while (i < itemidarray.length) {
            let cantidad = 0;
            for (j = 0; j < copyarray.length; j++) {
                if (copyarray[j].itemid == itemidarray[i]) {
                    cantidad = copyarray[j].count + cantidad;
                    price = copyarray[j].price;
                    name = copyarray[j].title;
                }

            }

            id = itemidarray[i];
            goodarray.push({ id, name, cantidad, price })
            console.log("federico", copyarray)

            i++;
        }






        const InsertOrder = ({ goodarray }) => {




            console.log('Inside InsertOrder function' + order);
            const db = getFirestore()
            const orderDb = db.collection('ordenes')
            orderDb.add(order).then(({ id }) => {
                setOrderid(id); //SUCESS
            }).catch(err => {
                setError(err);
            }).finally(() => {

            });


            alert("Enhorabuena su pedido ha sido ingresado, correo de confirmación sera enviado a la brevedad");
        }



        ListTemplate = goodarray.map((element) => (<tr key={element.id}><td>{element.name}</td><td>{element.cantidad}</td><td>{element.price}</td><td><DelButton itemid={id} /></td></tr>));

        console.log("goodarray:" + goodarray[0].id);
        return (
            <>
                <Table className="clarito">
                    <thead>
                        <tr className="fonts">
                            <th>Item</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Quitar Item</th>
                        </tr>
                    </thead>
                    <tbody className="fonts">
                        {ListTemplate}
                        <tr className="fonts">
                            <td >Total a Pagar:</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td>{total()}</td>
                        </tr>
                    </tbody>
                </Table>

                <div className="formulario">
                    <label>Nombre Completo:</label>
                    <br />
                    <input className="campos" type='text' name='name' onChange={evt => onNameChange(evt)} ></input>
                    <br />
                    <label>Apellido:</label>
                    <br />
                    <input className="campos" type='text' name='name' onChange={evt => onApellidoChange(evt)} ></input>
                    <br />
                    <label>Numero Telefonico:</label>
                    <br />
                    <input className="campos" type='text' name='phone' onChange={evt => onPhoneChange(evt)} ></input>
                    <br />
                    <label>Correo Electronico</label>
                    <br />
                    <input className="campos" type='text' name='email' onChange={evt => onEmailChange(evt)} ></input>
                    <br />
                    <br />

                    <button className="comprar" type='submit' variant='outline-secondary' disabled={!(name !== "" && phone !== "" && email !== "")} onClick={() => InsertOrder({ goodarray })}>Finalizar tu Compra</button>
                </div>





            </>
        )
    }
    else {
        return (
            <div className="cesta">
                <badge>El carro esta Vacio, Selecciona tus productos
                    <Link to={'/'}><br />
                        <button className="regreso">Volver</button>
                    </Link>
                </badge>
            </div>

        )



    }


}


export default Cart;