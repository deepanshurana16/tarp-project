import React, { useEffect, useState } from 'react';
import Apartment from '../Assets/apartment.png';
import { Box, Button, Stack, Typography } from '@mui/material';
import vitvgate from "../Assets/vitvgate.jpeg";
import { useNavigate } from 'react-router-dom';

const quotes = [
    "Your home away from home, managed seamlessly.",
    "Revolutionizing hostel management, one click at a time.",
    "Stay connected, stay informed—VHOST, your digital hostel assistant.",
    "Empowering students with smooth, reliable hostel services.",
    "From maintenance requests to updates, VHOST keeps you covered."
];

function Landing() {
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate("/complain");
    };

    const [displayedText, setDisplayedText] = useState("");
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentQuote = quotes[quoteIndex];
        
        if (charIndex < currentQuote.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(prev => prev + currentQuote[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 100); 
            
            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => {
                setQuoteIndex((prev) => (prev + 1) % quotes.length);
                setCharIndex(0);
                setDisplayedText(""); 
            }, 2000); 
            
            return () => clearTimeout(timeoutId);
        }
    }, [charIndex, quoteIndex]);

    return (
        <Box 
            sx={{
                display: "flex",
                height: "70vh",
                width: "100vw",
                overflow: "hidden"
            }}
        >
            <Box 
                sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px"
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <img src={Apartment} alt="Apartment Icon" width="80px" />
                        <Typography 
                            variant='h3'
                            sx={{
                                fontSize: { xs: "3rem", md: "4rem" },
                                fontWeight: "400",
                                letterSpacing: "0.2rem",
                            }}
                        >
                            VIT HOSTELS
                        </Typography>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        
                    }}
                >
                    <Typography 
                        variant='h3' 
                        sx={{
                            fontSize: { xs: "2rem", md: "2rem" },
                            fontWeight: "500",
                            textAlign: "center"
                        }}
                    >
                        {displayedText || "Make Easy"}
                    </Typography>
                </Box>

                {/* Button at the Bottom */}
                <Box sx={{ paddingBottom: "20px" }}>
                    <Button 
                        variant="contained" 
                        size='large' 
                        onClick={handleSubmit} 
                        sx={{ width: "300px" }}
                    >
                        Complain Here
                    </Button>
                </Box>
            </Box>

            <Box 
                sx={{
                    width: "70%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                <Box 
                    component="img"
                    src={vitvgate}
                    alt="VIT Gate"
                    sx={{
                                      
                        borderRadius: "8px",
                        padding: "10px",
                        border: "5px solid white",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        marginLeft:"6em",
                    }}
                />
            </Box>
        </Box>
    );
}

export default Landing;