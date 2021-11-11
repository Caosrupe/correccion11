import React, { useEffect } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Item = ({ jsonpack }) => {
  const itemid = jsonpack.id;
  useEffect(() => { }, [jsonpack]);
  console.log("jsonpack");
  console.log(jsonpack);

  return (
    <>
      <div className="container">
        <Card>
          <Card.Header>
            <Card.Img variant="top" src={jsonpack.pictureurl} />
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="subtitulo"><p>DESCRIPCION</p>{jsonpack.description}</Card.Subtitle><br />
            <Card.Text>PRECIO: $ {jsonpack.price}</Card.Text>
          </Card.Body>
          <button className="quiero"><Link to={`/item/${itemid}`}><Card.Link className="letrasnav">{jsonpack.title}</Card.Link></Link></button>
        </Card>
      </div>
    </>
  );
};

export default Item;