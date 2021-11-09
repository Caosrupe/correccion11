import React, {useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';




export const ItemDetail = ({jsonpack})=>{
  useEffect(() => {    }, [jsonpack]);


  console.log("itemDetail");
  console.log(jsonpack);
  if(jsonpack){
  console.log("feria")
    return(
    <>
      <div id="centerman" align="center">
        <Card className="card">
          <Card.Header>
            <Card.Img className="top"  src={jsonpack.pictureurl} />
          </Card.Header>
          <Card.Body className="body">
            <Link to={`/item/${jsonpack.id}`}>
              <Card.Link href="#" >{jsonpack.title}</Card.Link>
            </Link>
            <Card.Subtitle className="subtitulo">Precio:{jsonpack.price}</Card.Subtitle>
            <Card.Text>
              Cantidad disponible:{jsonpack.stock}
            </Card.Text>
          </Card.Body>
        </Card>
        <ItemCount productname={jsonpack.title} stock={jsonpack.stock} initial={1} productid={jsonpack.id} itemprice={jsonpack.price} />
      </div>
      </>
    );
}

  else {
        
    return(<></>);
}

};