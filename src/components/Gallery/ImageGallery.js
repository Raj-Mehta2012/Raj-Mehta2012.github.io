import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Particle from "../Particle";

import Skydiving from '../../Assets/ImgGallery/skydiving.jpg';
import Scuba from '../../Assets/ImgGallery/scuba.jpg';
import Al from '../../Assets/ImgGallery/angellanding.jpg';
import Miami from '../../Assets/ImgGallery/miami.png';
import Nyc from '../../Assets/ImgGallery/nyc.jpg';
import Acadia from '../../Assets/ImgGallery/acadia.jpg';
import Ele from '../../Assets/ImgGallery/elevillage.jpg';
import Jaipur from '../../Assets/ImgGallery/jaipur.jpg';
import Nd from '../../Assets/ImgGallery/nd.jpg';
import Dune from '../../Assets/ImgGallery/dune.jpg';
import Taj from '../../Assets/ImgGallery/tajmahal.jpg';
import La from '../../Assets/ImgGallery/la.jpg';
import Goa from '../../Assets/ImgGallery/goa.jpg';
import Neu from '../../Assets/ImgGallery/neu.jpg';
import Surat from '../../Assets/ImgGallery/surat.jpg';
import Vegas from '../../Assets/ImgGallery/vegas.jpg';

const ImageGallery = () => {
  // Replace 'ImgGallery' with the actual folder name inside 'Assets'
  const imageFolder = 'ImgGallery';

  // Replace this array with objects containing image details (filename, description, and location)
  const images = [
    {
      filename: Skydiving ,
      description: 'Worlds Highest Skydiving',
      location: 'Florida, USA',
    },
    {
      filename: Scuba,
      description: 'Scuba Diving',
      location: 'Key West, USA',
    },
    {
      filename: Al,
      description: 'Angels Landing',
      location: 'Utah, USA',
    },
    {
      filename: Miami,
      description: 'Miami Diaries',
      location: 'Florida, USA',
    },
    {
      filename: Acadia,
      description: 'Acadia National Park',
      location: 'Maine, USA',
    },
    {
      filename: Nd,
      description: 'Undergrad at University of Notre Dame',
      location: 'Indiana, USA',
    },
    {
      filename: Ele,
      description: 'Elephant Village',
      location: 'Rajasthan, India',
    },
    {
      filename: Jaipur,
      description: 'Amber Fort',
      location: 'Jaipur, India',
    },
    {
      filename: La,
      description: 'Hollywood Sign',
      location: 'Los Angeles, USA',
    },
    {
      filename: Surat,
      description: 'Indian Wedding',
      location: 'Surat, India',
    },
    {
      filename: Nyc,
      description: 'Edge @New York City',
      location: 'New York, USA',
    },
    {
      filename: Dune,
      description: 'Dune State Park',
      location: 'Michigan, USA',
    },
    {
      filename: Taj,
      description: 'The Taj Mahal',
      location: 'Agra, India',
    },
    {
      filename: Vegas,
      description: 'Las Vegas',
      location: 'Nevada, USA',
    },
    {
      filename: Goa,
      description: 'Candolim Beach',
      location: 'Goa, India',
    },
    {
      filename: Neu,
      description: 'Masters at Northeastern University',
      location: 'Boston, USA',
    },
    
  ];

  return (
    <div>
      <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {images.map((image, index) => (
          <Col key={index} className="mb-4" style={{paddingTop: '80px'}}>
            <Card style={{ width: '300px', height: '400px' }}>
              <Card.Img
                variant="top"
                src={image.filename}
                alt={image.description}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{image.description}</Card.Title>
                <Card.Text>{image.location}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default ImageGallery;
