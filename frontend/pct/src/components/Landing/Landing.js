import React from 'react';
import Image from 'react-bootstrap/Image';
import Footer from '../Footer/Footer';
import Logo from '../images/logo.png';
import {  Col, Container, Row } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "./Landing.css";


const Landing = () => {
  return (
    <>
    <Container>
      <Row>
        <Col xs={6} md={4} >
          <Image className='logoimg' src={Logo} width={170} roundedCircle />
        </Col>
      </Row>
      <h3>Welcome to our Website</h3><br/><br/>
    <Button variant="contained" color='success'>Search Products Here</Button>
    <h4>Top Trending Products</h4>
    <div className='contain'>
    <Grid container spacing={2}>
      <Grid item xs={3}>
      <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026582322"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          iPhone 14
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buy iPhone 14 128GB Blue - Apple (IN) 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=2000&hei=1222&fmt=jpeg&qlt=95&.v=1671304673202"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        16‑inch MacBook Pro
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buy MacBook Pro- Apple (IN) 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://m.media-amazon.com/images/I/51hzprIKpVL._SY445_SX342_.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wings of fire
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buy Wings of fire 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://m.media-amazon.com/images/I/41sHRWXCfvL._SX300_SY300_QL70_FMwebp_.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fire Bolt Watch
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buy Fire Bolt Watch 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
      </Grid>
      
    </Grid>
    
    </div>
    </Container>
    <Footer/>
  </>
  )
}

export default Landing