import React from 'react';
import { Container, Grid, Box, Typography, TextField, MenuItem, Card, CardContent, CardActions, Button, Divider,Modal,Backdrop,Fade } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Navbar from './Navbar';
import mattress1 from "../Assets/mattress1.png";
import curtain from "../Assets/curtain.png"
import pillow from "../Assets/pillow.png";
import laptop from "../Assets/laptop.png"
import cycle from "../Assets/cycle.png"
import laptopstand from "../Assets/laptopstand.png"
import trolley from "../Assets/trolley1.png"
import bag from "../Assets/bag1.png"
import book from "../Assets/book.png"
import { useState } from 'react';

// Mock data for listings
const listings = [
  {
    img: mattress1,
    title: 'Nilkamal Mattress',
    type: 'Utility',
    usedDuration: '2 months',
    condition: '9/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹4000',
    views: 18,
    emails: 10,
    purchaseType: 'One Time Payment',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Comfortable and durable Nilkamal mattress, providing a good balance of softness and support for a restful sleep. Perfect for any bedroom.'
  },
  {
    img: curtain,
    title: 'Curtain',
    type: 'Utility',
    usedDuration: '1 year 3 months',
    condition: '6/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹130',
    views: 20,
    emails: 10,
    purchaseType: 'Rental',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Simple yet elegant curtain for home or office use. Ideal for controlling light and providing privacy, though slightly worn with some fading.'
  },
  {
    img: pillow,
    title: 'Frido Pillow',
    type: 'Chef',
    usedDuration: 'New',
    condition: '10/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹800',
    views: 12,
    emails: 3,
    purchaseType: 'One Time Payment',
    returnPolicy: getRandomReturnPolicy(),
    description: 'A soft and comfortable Frido pillow, offering excellent neck and back support for a restful night’s sleep. Brand new and in perfect condition.'
  },
  {
    img: laptop,
    title: 'Macbook Laptop',
    type: 'Electronics',
    usedDuration: '6 months',
    condition: '8/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹3200',
    views: 12,
    emails: 3,
    purchaseType: 'Rental',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Sleek and powerful Macbook, perfect for professional and personal use. Slightly used but in excellent working condition. Great for anyone needing a reliable laptop.'
  },
  {
    img: cycle,
    title: 'Roadeo Cycle',
    type: 'Utility',
    usedDuration: '3 months',
    condition: '9/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹2650',
    views: 12,
    emails: 3,
    purchaseType: 'Rental',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Sturdy and durable Roadeo cycle, ideal for city commuting and fitness enthusiasts. Nearly new, with minimal wear and tear.'
  },
  {
    img: laptopstand,
    title: 'Amazon Basics Laptop Stand',
    type: 'Utility',
    usedDuration: '3 years',
    condition: '7/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹1350',
    views: 12,
    emails: 3,
    purchaseType: 'One Time Payment',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Amazon Basics laptop stand that helps improve ergonomics by elevating your laptop for better posture. Slightly used but still in good condition.'
  },
  {
    img: trolley,
    title: 'American Tourister Trolley',
    type: 'Travel',
    usedDuration: '4 years',
    condition: '4/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹3400',
    views: 12,
    emails: 3,
    purchaseType: 'One Time Payment',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Reliable and spacious American Tourister trolley, great for travel. Shows significant signs of wear but still fully functional for all your travel needs.'
  },
  {
    img: bag,
    title: 'Under Armour Bagpack',
    type: 'Utility',
    usedDuration: '1 year 7 months',
    condition: '8/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹3250',
    views: 12,
    emails: 3,
    purchaseType: 'One Time Payment',
    returnPolicy: getRandomReturnPolicy(),
    description: 'Versatile Under Armour backpack, suitable for both daily use and sports. It is in great condition with only minor signs of wear.'
  },
  {
    img: book,
    title: 'Advanced Quantum Physics Book',
    type: 'Utility',
    usedDuration: '4 days',
    condition: '10/10',
    netProfit: '$5,000 p/mo',
    priceRange: '₹600',
    views: 12,
    emails: 3,
    purchaseType: 'Rental',
    returnPolicy: getRandomReturnPolicy(),
    description: 'An advanced-level book on quantum physics, perfect for students and professionals looking to deepen their knowledge in the field. Almost new and in pristine condition.'
  },
  // Add other listings as needed
];


// Function to get a random return policy
function getRandomReturnPolicy() {
  const policies = ['No Returns', '1 month', '6 months','3 months','1 year','15 days'];
  const randomIndex = Math.floor(Math.random() * policies.length);
  return policies[randomIndex];
}


function Olx() {
  const [open, setOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleOpen = (listing) => {
    setSelectedListing(listing);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedListing(null);
  };

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          width: '100vw',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          top: 0,
          zIndex: 10,
          backgroundColor: '#fff',
        }}
      >
        <Navbar />
      </Box>

      {/* Main Layout */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        marginTop: '80px', // Adjust to account for fixed navbar
        overflow: 'hidden', // Prevents page scrolling
      }}
    >
      {/* Filters */}
      <Box
        sx={{
          width: '1100px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          height: 'calc(100vh - 80px)', // Full height minus navbar
          position: 'sticky', // Sticks while scrolling listings
          top: 0,
          overflowY: 'auto', // Allows scrolling within the Filters section
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Filters
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />

        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Search Description
        </Typography>
        <TextField variant="outlined" fullWidth size="small" placeholder="Search" sx={{ marginBottom: '20px' }} />

        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Price Range
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <TextField variant="outlined" size="small" placeholder="Min" />
          <TextField variant="outlined" size="small" placeholder="Max" />
        </Box>

        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Tag
        </Typography>
        <TextField variant="outlined" fullWidth size="small" placeholder="Enter tag" sx={{ marginBottom: '20px' }} />

        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Community size
        </Typography>
        <TextField variant="outlined" fullWidth size="small" placeholder="Enter size" sx={{ marginBottom: '20px' }} />

        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Net Profit
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <TextField variant="outlined" size="small" placeholder="Min" />
          <TextField variant="outlined" size="small" placeholder="Max" />
        </Box>

        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Rating
        </Typography>
        <Box>
          {[5, 4, 3].map((stars) => (
            <Box key={stars} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              {[...Array(stars)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#ffcc00', fontSize: '18px' }} />
              ))}
            </Box>
          ))}
        </Box>
      </Box>

        {/* Listings */}
        <Box
          sx={{
            flexGrow: 1,
            padding: '20px',
            height: 'calc(100vh - 80px)', // Full height minus navbar
            overflowY: 'auto', // Scrollable listings section
          }}
        >
          <Grid container spacing={2}>
            {listings.map((listing, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      marginRight: '20px',
                      overflow: 'hidden', // Ensures image fits the circle
                    }}
                  >
                    <img
                      src={listing.img}
                      alt={listing.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Ensures image covers the container fully
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {listing.title}
                    </Typography>
                    <Typography variant="body2">Type: {listing.type}</Typography>
                    <Typography variant="body2">Use Duration: {listing.usedDuration}</Typography>
                    <Typography variant="body2">Condition :  {listing.condition}</Typography>
                    <Typography variant="body2">Transaction Type  :  {listing.purchaseType}</Typography>
                    <Typography variant="body2">Return Policy  :  {listing.returnPolicy}</Typography>
                  </CardContent>
                  <Box sx={{ textAlign: 'right', marginRight: '20px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{listing.priceRange}</Typography>
                    <Typography variant="body2">
                      👀 {listing.views} ✉️ {listing.emails}
                    </Typography>
                  </Box>
                  <CardActions>
                    <Button variant="contained" color="primary" onClick={() => handleOpen(listing)}>
                      View Listing
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Modal
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  open={open}
  onClose={handleClose}
  closeAfterTransition
  slots={{ backdrop: Backdrop }}
  slotProps={{
    backdrop: {
      timeout: 500,
    },
  }}
>
  <Fade in={open}>
    <Box
      sx={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        padding: 4,
        borderRadius: 2,
        boxShadow: 24,
        zIndex: 1300,
        width: '80%',
        height: '80%',  
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '900px',
      }}
    >
      {/* Left side (Image) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={selectedListing?.img || 'default-image.jpg'}
          alt={selectedListing?.title || 'Product Image'}
          style={{
            width: '80%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Right side (Item details) */}
      <Box
        sx={{
          flex: 1,
          paddingLeft: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {selectedListing && (
          <>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
            >
              {selectedListing.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontWeight: '500', fontSize: '1.1rem', marginTop: '10px' }}
            >
              Type: {selectedListing.type}
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontWeight: '500', fontSize: '1.1rem', marginTop: '10px' }}
            >
              Use Duration: {selectedListing.usedDuration}
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontWeight: '500', fontSize: '1.1rem', marginTop: '10px' }}
            >
              Condition: {selectedListing.condition}
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontWeight: '500', fontSize: '1.1rem', marginTop: '10px' }}
            >
              Transaction Type: {selectedListing.purchaseType}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '20px',
              }}
            >
              Return Policy:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'normal', fontSize: '1.1rem' }}
            >
              {selectedListing.returnPolicy}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '20px',
              }}
            >
              Description:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'normal', fontSize: '1.1rem' }}
            >
              {selectedListing.description}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '20px',
                color: 'green',
              }}
            >
              Price:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 'normal', fontSize: '1.1rem' }}
            >
              {selectedListing.priceRange}
            </Typography>

            <Button
              sx={{
                marginTop: '20px',
                alignSelf: 'flex-start',
              }}
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Close
            </Button>
          </>
        )}
      </Box>
    </Box>
  </Fade>
</Modal>





    </>
  );
}

export default Olx;