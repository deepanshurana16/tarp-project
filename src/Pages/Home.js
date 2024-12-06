import React from 'react'
import Navbar from '../Components/Navbar'
import Carousell from '../Components/Carousell'
import { Container } from '@mui/material'
import Vitabout from '../Components/Vitabout'
import Landing from '../Components/Landing'
import { useAuth } from '../contexts/authContext'


function Home() {

  const { userLoggedIn } = useAuth()
  return (
    userLoggedIn ?
  <>
    <Navbar/>
    <Container sx={{display : "flex"  ,  justifyContent : "space-between" , alignItems : "center" , marginTop :"40px", flexDirection : {xs : "column" , md :"row"} , width : '70vw'}}>
      <Landing/>
    </Container>

    <Container sx={{marginTop: "40px"}}>
          <Carousell/>
    </Container>

    <Container sx={{marginTop : "40px" , display:"flex" , justifyContent:"center"}}>
         <Vitabout image = "https://mdmsenquiry.com/wp-content/uploads/2021/09/VIT-Vellore-Direct-Admission-2021-768x374.jpg" title="Vellore institute of technology,Vellore" content="  VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students. The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence. In fact, it has become a way of life for us. The highly motivated youngsters on the campus are a constant source of pride. Our Memoranda of Understanding with various international universities are our major strength. They provide for an exchange of students and faculty and encourage joint research projects for the mutual benefit of these universities. Many of our students, who pursue their research projects in foreign universities, bring high quality to their work and esteem to India and have done us proud. With steady steps, we continue our march forward. "/>
    </Container>
    
   
    
    
    </>

    :

    <></>
      
      
    
  )
}

export default Home
