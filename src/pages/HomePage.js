import React from 'react';
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import ContactPage from './ContactPage';

const HomePage = (props) => {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text= {props.text}/>
            <Carousel/>
            <ContactPage/>
        </div>
    )
}

export default HomePage;