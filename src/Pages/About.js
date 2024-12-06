import React from 'react'
import Navbar from '../Components/Navbar'
import { Container } from '@mui/material'
import Vitabout from '../Components/Vitabout'
import founder from '../Assets/founder.jpeg'
function About() {
  return (
    <div>
      <Navbar/>
      <Container sx={{marginTop : "20px" , display:"flex" , justifyContent:"center"}}>
         <Vitabout image={founder} title = "Nishant Singh" content="A good charming guy , wanted to create an online website where students from each block can write there problem as it is done offline in current time and warden of respective block can see the problems and resolve their problems , problems can be like(AC issue , room cleaning, fight issue , electricity issue , general issue , health etc )"/>
    </Container>
    </div>
  )
}

export default About
