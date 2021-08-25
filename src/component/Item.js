import React from 'react'
import { Button,Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import PropTypes from "prop-types";

const Item = ({name,price,image}) => {
    
    const alertBtn=(e)=>alert("modele name is " + e)
    return (
        
            <Card style={{ width: '18rem' }} id="cart">
                <Card.Img variant="top" src={image} style={{height:268}} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{name}</ListGroupItem>
                    <ListGroupItem>{price +" D.T"}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Button variant="info"onClick={()=>alertBtn(name)}>Info</Button>{' '}
                </Card.Body>
            </Card>
    )

    
    
}
Item.defaultProps= {
    name:"unavailble TV",
    price:0,
    image:"https://i.ytimg.com/vi/q41AIk3gPKQ/hqdefault.jpg"
};
Item.propTypes={
    image:PropTypes.string,
    price:PropTypes.number,
    name:PropTypes.string
};


export default Item
