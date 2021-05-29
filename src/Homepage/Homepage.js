import React from 'react'
import Container from '../Components/Container';
import './Homepage.css';
import Landing from '../Assets/landingpage-image.jpg';


const Homepage = () => {
    return (
        <Container>
         <div className='imgdiv'> 
             <img src={Landing} alt='money' className='img'/>
             <p className='caption'><em>...Simplicity with class!</em></p>
         </div>
         
        </Container>
    )
}

export default Homepage
