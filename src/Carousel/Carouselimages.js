import React from 'react'
import {Carouseldata} from '../Carousel/Carouseldata'
import Carousel from '../Carousel/Carousel'
import Container2 from '../Components/Container2'

const Carouselimages = () => {
    return (
        <Container2>
            <Carousel slides={Carouseldata}/>
        </Container2>
    )
}

export default Carouselimages
