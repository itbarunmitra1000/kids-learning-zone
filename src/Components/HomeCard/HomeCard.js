import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeCard.css';

const HomeCard = (props) => {
    const {img,course,description,duration} = props.service;
    return (
        <div >
            <Col>
                <Card  >
                    <Card.Img variant="top image-size" src={img} />
                    <Card.Body>
                        <Card.Title>{course}</Card.Title>
                        <Card.Title>{description}</Card.Title>
                        <Card.Text>Duration: {duration} Month</Card.Text>
                       <Button variant="success">Enroll Course</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HomeCard;