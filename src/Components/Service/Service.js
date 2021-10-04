import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    return (
        <div className= 'card-container'>
         <Row xs={1} md={2} lg={2} className="g-4">
            {
                    services.map(service => <ServiceCard 
                    key = {service.key}
                    service = {service}
                    ></ServiceCard>)
                    
            }
            </Row>
        </div>
    );
};

export default Service;