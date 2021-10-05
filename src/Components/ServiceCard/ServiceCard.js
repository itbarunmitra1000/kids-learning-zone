import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { img, course, description, duration, cost } = props.service;
    return (
        <div  >
        {/* card create dynamic  */}
            <Col>
                <Card className='shadow'  >
                    <Card.Img variant="top image-size" src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bolder fs-4 text-danger'>{course}</Card.Title>
                        <Card.Title className="fs-6">{description}</Card.Title>
                        <Card.Text className='text-success fs-4 fw-bolder'>Duration: {duration} Month</Card.Text>
                        <Card.Text className='text-success fs-3 fw-bolder'>  Cost: <span className='text-danger'>${cost} </span> </Card.Text>
                        <Button variant="success" className="btn-primary p-2 rounded">Enroll Course</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceCard;