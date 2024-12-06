import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Vitabout(props) {
  return (
    <Card 
      sx={{ 
        width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, 
        backgroundColor: "#0466c8",
        margin: '0 auto'
      }} 
    >
      <CardMedia
        sx={{ 
          height: 500, 
          objectFit: 'contain', 
        }}
        image={props.image}
        title="Vellore Institute of Technology"
      />
      <CardContent>
        <Typography gutterBottom 
          variant="h4" 
          component="div" 
          color="white" 
          align="center"  >
          {props.title}
        </Typography>
        <Typography variant="body1" color="white">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Vitabout;