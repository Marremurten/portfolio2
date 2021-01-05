import React, { Component } from 'react';
import barter from '../assets/images/barter-club6.png';

import cool from '../assets/images/Cool_cocktails.png';
import petclub from '../assets/images/Petogether.png'

import Card from './Card';
import { Container, Row } from 'react-bootstrap';



class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: 'The Barter Club',
                subTitle: 'Le Wagon Project',
                imgSrc: barter,
                link: "#",
                selected: false
            },
            {
                id: 1,
                title: 'PetTogether',
                subTitle: 'Le Wagon Project',
                imgSrc: petclub,
                link: "#",
                selected: false
            },
            {
                id: 2,
                title: 'Cool Cocktails',
                subTitle: 'Le Wagon Project',
                imgSrc: cool,
                link: "#",
                selected: false
            }

            ]
        }

    }

      handleClick = (id, card) => {
         let items = [...this.state.items]

         items[id].selected = items[id].selected ? false : true;

         items.forEach(item => {
             if(item.id !== id) {
                 item.selected = false;
             }
         });

         this.setState({
             items
         });
     }

     makeItems =(items) => {
         return items.map(item => {
             return <Card item= {item} click= {(e => this.handleClick(item.id, e))} key= {item.id} />
         })
     }


    render(){
        return(
            <Container fluid= {true}>
                <Row className= "justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        )
    }
}

export default Carousel