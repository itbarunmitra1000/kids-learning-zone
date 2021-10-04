import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    return (
        <div className= 'card-container' >
          <Row xs={1} md={2} lg={2} className="g-4">
                {
                    services.map(service =><HomeCard service={service}></HomeCard>)
            }
            </Row>

        </div>
    );
};

export default Home;