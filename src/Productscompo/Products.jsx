import React, { Component } from 'react';
import p_data from '../ProductsData/ProductsData';
import { Card, Button ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Products.css'; // Optional: For layout styling

export default class Products extends Component {
  render() {
    return (
      <Container className='products-container'>
        
        {p_data.map((product) => (
          <Card key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>

              
              <Button as={Link} to={`https://react-class-based.netlify.app/productdetails/${product.id}`} variant="success">View Details</Button>
            </Card.Body>
          </Card>
        ))}
        
    
        </Container>
    );
  }
}