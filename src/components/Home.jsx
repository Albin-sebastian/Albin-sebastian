
import { AppBar, Box, Button, Card, CardContent, CardMedia, Tab, Tabs, styled, Toolbar, Typography, CssBaseline, Grid, Paper } from "@mui/material";

import React, { useState } from "react";
import {
  FiCard,
  FiCardActionArea,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";
import ScrollToSlide from "./ScrollToSlide";

import { TabList, TabPanel, TabContext } from '@mui/lab';

const StyledButton = styled(Button)({

  color: "white",
  variant: "text",
  textTransform: "none",
  "&:active": {},
  "&:focus": {
    border: "1px dashed black",
  },
});
const CardButton = styled(Button)({
  fontSize: 20,
  lineHeight: 1,
  color: "blue",
  variant: "text",
  textTransform: "none",
  "&:hover": {
    TextDecoration: 'underline'
  },
  "&:active": {},
  "&:focus": {
    //border: "1px dashed black",
  },
});



const Home = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
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
          {/* <Card sx={{
            width: '47vw', height: '52vh',

            backgroundImage: `url("https://picsum.photos/1500/1500")`
          }}> </Card> */}
          <FiCard sx={{ width: '48vw', height: '52vh' }}>
            <FiCardActionArea>
              <FiCardMedia
                component="img"
                image="https://picsum.photos/2000/2000"
                alt="green iguana"

              />
              <FiCardContent >
                <Box marginY='50px'>
                  <CardButton sx={{ fontSize: 50 }}> Watch Microsoft<br /> Build on demand</CardButton>

                  <Typography>Explore the latest developer technologies <br /> at this annual digital event. </Typography>
                </Box>
              </FiCardContent>
            </FiCardActionArea>
          </FiCard>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'space-between',
          }}>
            <Card sx={{
              display: 'flex',
              width: '46vw', height: '25vh',

            }} >
              <Box sx={{ display: 'flex', flexDirection: 'colomn' }}>
                <CardMedia component='img'
                  sx={{
                    width: 158
                  }}
                  image="https://picsum.photos/1500/1500"
                  alt="live image" />
                <CardContent>
                  <CardButton> Develop and test your next great app</CardButton>
                  <Typography>Code, test, and ship more securely from cloud developer environments. </Typography>

                </CardContent>
              </Box>
            </Card>

            <Card sx={{
              display: 'flex',
              width: '46vw', height: '25vh',

            }} >
              <Box sx={{ display: 'flex', flexDirection: 'colomn' }}>
                <CardMedia component='img'
                  sx={{
                    width: 158
                  }}
                  image="https://picsum.photos/1500/1500"
                  alt="live image" />
                <CardContent>
                  <CardButton> Accelerate app innovation and modernization</CardButton>
                  <Typography>Deploy and scale your apps using cloud-native technology and fully managed databases. </Typography>

                </CardContent>
              </Box>
            </Card>

            <br />
            <br />

          </Box>
        </Box >
        <Box width='100%' height="150px" bgcolor='red'>
          <Typography variant="h6" color="initial"> New to Azure?</Typography>
          <Button variant="outlined" color="primary" textTransform='none' > Get an overview

          </Button>
        </Box ></Box>
      {/* TAB LIST */}
      <Box >
        <TabContext value={value}>

          <Box >
            <TabList aria-label='Tabs example' onChange={handleChange} centered textColor="secondary"
              indicatorColor="secondary">
              <Tab icon={
                <Box
                  sx={{ width: 150, height: 100 }}
                  component="img"
                  alt="test avatar"
                  src="https://source.unsplash.com/random/800x800"
                />
              } value='1' />

              <Tab icon={
                <Box
                  sx={{ width: 150, height: 100 }}
                  component="img"
                  alt="test avatar"
                  src="https://source.unsplash.com/random/800x800"
                />
              } value='2' />

              <Tab icon={
                <Box
                  sx={{ width: 150, height: 100 }}
                  component="img"
                  alt="test avatar"
                  src="https://source.unsplash.com/random/800x800"
                />
              } value='3' />

              <Tab icon={
                <Box
                  sx={{ width: 150, height: 100 }}
                  component="img"
                  alt="test avatar"
                  src="https://source.unsplash.com/random/800x800"
                />
              } value='4' />

            </TabList>
          </Box>

          <TabPanel value='1'><Box
            sx={{ width: '100vw', height: '100vh' }}
            component="img"
            alt="test avatar"
            src="https://source.unsplash.com/random/800x800"
          />
          </TabPanel>
          <TabPanel value='2'><Box
            sx={{ width: '100vw', height: '100vh' }}
            component="img"
            alt="test avatar"
            src="https://source.unsplash.com/random/800x800"
          /></TabPanel>
          <TabPanel value='3' ><Box
            sx={{ width: '98vw', height: '100vh', p: '0px', m: '0px' }}
            component="img"
            alt="test avatar"
            src="https://source.unsplash.com/random/800x800"
          /></TabPanel>
          <TabPanel value='4'><Box
            sx={{ width: '100vw', height: '100vh', marginLeft: '0' }}
            component="img"
            alt="test avatar"
            src="https://source.unsplash.com/random/800x800"
          />
          </TabPanel>
        </TabContext>

      </Box >
      <br /><br />
      {/* <Paper bgcolor='lightblue' width='100vw' height='100vh'> */}
      <Paper sx={{
        p: 'auto auto auto auto',
        margin: 'auto',
        bgcolor: 'lightblue',
        width: '100vw',
        height: '100vh'
      }}>
        <Grid container>
          <Grid items>
            <Card sx={{
              p: 'auto',
              align: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              width: '50vw', height: '50vh',

            }} >
              <Box sx={{ display: 'flex', flexDirection: 'colomn' }}>
                <CardMedia component='img'
                  sx={{
                    width: '150'
                  }}
                  image="https://picsum.photos/1500/1500"
                  alt="live image" />
                <CardContent>
                  <CardButton> Develop and test your next great app</CardButton>
                  <Typography>Code, test, and ship more securely from cloud developer environments. </Typography>

                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>

      </Paper>
      hai
    </>
  );
};

export default Home;
