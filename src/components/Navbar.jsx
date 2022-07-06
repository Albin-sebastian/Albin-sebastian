import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-start",
});

const StyledToolbarRight = styled(Toolbar)({
  gap: 5,
  display: "flex",
  justifyContent: "flex-end",
  "&:focus": {
    // borderStyle: "dotted",
    //boxShadow: "0 0 0 0.02rem rgba(0,123,255,.5)",
    borderRadious: 0,
    border: "1px dashed black",
  },
});

const StyledButton = styled(Button)({
  color: "black",
  variant: "text",
  textTransform: "none",
  marginRight: '10px',
  "&:active": {
    //boxShadow: "block",
    //backgroundColor: "#0062cc",
    // borderColor: "#005cbf",
  },
  "&:focus": {
    // borderStyle: "dotted",
    //boxShadow: "0 0 0 0.02rem rgba(0,123,255,.5)",
    borderRadious: 0,
    border: "1px dashed black",
  },
});

const StyledRightButton = styled(Button)({
  color: "black",
  variant: "text",
  textTransform: "none",
  "&:active": {},
  "&:focus": {
    border: "1px dashed black",
  },
});

const Navbar = () => {
  return (
    <Box>
      <AppBar
        variant="outlined"
        color="white"
        align-item="center"
        position="sticky"
      >
        <StyledToolbar>
          <Typography>LOGO</Typography>
          <Button>Azure</Button>
          <StyledButton sentenceCa>Explore</StyledButton>
          <StyledButton>Products</StyledButton>
          <StyledButton>Solutions</StyledButton>
          <StyledButton>Pricing</StyledButton>
          <StyledButton>Partners</StyledButton>
          <StyledButton>Resources</StyledButton>
          <Button>Search</Button>
          <StyledToolbarRight>
            <StyledRightButton> Docs </StyledRightButton>
            <StyledRightButton> Support </StyledRightButton>
            <StyledRightButton> Contact Sales </StyledRightButton>
            <Button>Free account</Button>
            <StyledRightButton> Sign in </StyledRightButton>
          </StyledToolbarRight>
        </StyledToolbar>

        {/* <Toolbar sx={{ bgcolor: "white", color: "black" }}> bgf</Toolbar> */}

      </AppBar>


    </Box>
  );
};

export default Navbar;
