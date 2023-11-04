import React from 'react';
import Logo from '../images/logo.png';
import { Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Navbars  from '../navbar/Navbars';
import Footer from '../footer/Footer';
import {Card,Button,CardActions,CardContent,Typography,Grid,CardMedia,} from '@mui/material';
import "./Landing.css";

function Landing() {

  const navigate = useNavigate();
  return (
    <>
    <Navbars/>
      <Container>
          <div className="text-center">
              <img src={Logo} alt="logo" width={150} className="logoimg"/>
          </div>
          
        <h3>Welcome to our Website</h3>
        <Button variant="contained" color='success' onClick={()=>navigate("/search")} >Search Products Here</Button><br/><br/>
        <h4>Top Trending Products</h4>
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
          <Card sx={{ maxWidth: 250 }} className='item-card'>
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
    <br/>
    <br/>
    <p>How Do Price Comparator Sites Work?</p>
        <p>
        Price Comparator sites work by dynamically fetching updated prices, features, reviews, descriptions, and all essential information on various products from different e-commerce sites. All this data is then tailored in a structured manner for your easy understanding. So, when you are searching for a product, the price comparison site fetches prices and gives you results using which you can make the best purchase. Many of these price comparison sites allow browser notifications, and many even let you set alerts for price drops.
        </p>
    <Footer/>
      </Container>
    </>
  )
}

export default Landing;