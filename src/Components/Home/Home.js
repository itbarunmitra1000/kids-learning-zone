import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    return (
        <>
        {/* header component add  */}
        <Header></Header>
        <div className= 'd-flex justify-content-center'>
        <div className= 'card-container ' >
        
        <Row xs={1} md={2} lg={2} className="g-4">
        {/* service data maping  */}
              {
                  services.map(service =><HomeCard 
                  key={service.key}
                  service={service}></HomeCard>)
          }
          </Row>

      </div>
        </div>
        {/* footer component add  */}
        <Footer></Footer>
        </>
    );
};

export default Home;