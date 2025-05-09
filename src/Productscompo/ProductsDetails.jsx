import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Container,Button } from 'react-bootstrap';
import p_data from '../ProductsData/ProductsData'
import 'bootstrap/dist/css/bootstrap.min.css';



const ProductsDetails = () => {
  const {id} = useParams();
  const seletedProduct = p_data.find((Product)=> Product.id === Number(id))
  console.log(id)
  return (
    
    <div>
      <Container>
      <Card style={{ width: '100%' }}>
      <Card.Title>{seletedProduct.title}</Card.Title>
      <Card.Img variant="top" src={seletedProduct.image} />
      <Card.Body>
        <Card.Text>
        ${seletedProduct.price}
        </Card.Text>
        <Card.Subtitle>
        {seletedProduct.description}
        </Card.Subtitle>
      
      </Card.Body>
    </Card>
      </Container>
    </div>
  )
}

export default ProductsDetails

