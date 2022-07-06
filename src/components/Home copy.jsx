
import { AppBar, Box, Button, Card, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
  FiCard,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";

import ScrollToSlide from "./ScrollToSlide";


const StyledButton = styled(Button)({

  color: "white",
  variant: "text",
  textTransform: "none",
  "&:active": {},
  "&:focus": {
    border: "1px dashed black",
  },
});


const Home = () => {
  return (
    <>
      {/* card 1 */}
      <Box
        sx={{
          width: "100%",
          height: "50px",
          bgcolor: "blue.main",
          color: "white.main",
        }}
        textAlign="center"
      >
        <Typography p={1.5}>
          We're in this together. Explore Azure resources and tools to help you
          navigate COVID-19
        </Typography>
      </Box>
      {/* https://source.unsplash.com/random/800x800 */}
      {/* <Box
        component=""
        // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        // src="../images/hero-desktop.webp"
        alt="fsdgtf"
        //src={hero}
        sx={{ width: "100vw", height: "100vh", }}
      > fsgfsg</Box> */}
      {/* <FiCard sx={{
        width: '100vw', height: '83vh',

        backgroundImage: `url("https://picsum.photos/1500/1500")`
      }}> */}
      <FiCard>
        <FiCardMedia
          component="img"
          height="140"
          image="https://picsum.photos/1500/1500"
          alt="green iguana"
        />

        <FiCardContent >
          <Box marginY='50px'>
            <Typography children color="blue.main" variant='h5'> AZURE. INVENT WITH PURPOSE.</Typography>
            <Typography variant="h2" >Learn, connect, and <br /> discover </Typography>
            <Typography>Build innovative new apps with the latest Azure technologies announced at Microsoft <br />Build.Get started with pay-as-you-go pricing.There's no upfront commitment— <br />cancel anytime. Or try Azure free for up to 30 days. </Typography>
            <Typography marginTop='25px'>
              <Button variant="contained" sx={{ textTransform: 'none' }}> Get started</Button>
              <Button variant="outlined" sx={{ textTransform: 'none', marginLeft: '25px' }}> Try Azure for free</Button>
            </Typography>
          </Box>
        </FiCardContent>
      </FiCard>

      <ScrollToSlide bgcolor='yellow'>
        <AppBar >
          <Toolbar backgroundColor='yellow'>
            <Typography>LOGO</Typography>
            <Button color='white'>Azure</Button>
            <StyledButton> Contact Sales </StyledButton>
            <Button color='white'>Free account</Button>


          </Toolbar>
        </AppBar>
      </ScrollToSlide>
      <Box  >
        <Typography variant='h5' align='center' mt='35px' mb='15px' fontWeight='bold'>
          On-premises,  hybrid, multicloud, or at the edge—create secure, future-ready cloud solutions on Azure
        </Typography>
        <Box sx={{
          ml: '20px',
          mr: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'space-between',
        }}>
          <Card sx={{
            width: '47vw', height: '52vh',

            backgroundImage: `url("https://picsum.photos/1500/1500")`
          }}> </Card>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'space-between',
          }}>
            <Card sx={{
              width: '46vw', height: '25vh',

              backgroundImage: `url("https://picsum.photos/1500/1500")`
            }} > </Card>
            <Card gap='15px' sx={{

              width: '46vw', height: '25vh',

              backgroundImage: `url("https://picsum.photos/1500/1500")`
            }}> </Card></Box>
        </Box >
        <Box width='100%' height="150px" bgcolor='red'>
          <Typography variant="h6" color="initial"> New to Azure?</Typography>
          <Button variant="outlined" color="primary" textTransform='none' > Get an overview

          </Button>
        </Box ></Box>
    </>
  );
};

export default Home;
