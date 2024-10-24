import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  styled,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#a0d8ef", // Cor de fundo do body
  color: "#ffffff",
  padding: theme.spacing(6, 0),
  marginTop: "auto"
}));

const StyledSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  borderRadius: theme.spacing(1),
  backdropFilter: "blur(10px)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)"
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "gray",
  margin: theme.spacing(0, 1),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
    color: "black"
  }
}));

const StyledLink = styled(ListItemText)(({ theme }) => ({
  cursor: "pointer",
  color: 'gray',
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "black"
  }
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setSubscribed(true);
    setEmail("");
  };

  const quickLinks = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Contact Us",
    "Career"
  ];

  return (
    <StyledFooter component="footer" role="contentinfo">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <StyledSection elevation={0}>
              <Typography variant="h6" gutterBottom>
                About Company
              </Typography>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1560179304-6fc1d8749b23"
                alt="Company Logo"
                sx={{ width: 120, mb: 2 }}
              />
              <Typography variant="body2" paragraph>
                We are a dynamic company committed to delivering innovative solutions
                and exceptional service to our clients worldwide.
              </Typography>
              <Typography variant="body2">
                123 Business Avenue, Tech City
                <br />
                Phone: +1 234 567 890
                <br />
                Email: info@company.com
              </Typography>
            </StyledSection>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledSection elevation={0}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <List>
                {quickLinks.map((link) => (
                  <ListItem key={link} disableGutters>
                    <StyledLink primary={link} />
                  </ListItem>
                ))}
              </List>
            </StyledSection>
          </Grid>

          <Grid item xs={12} md={5}>
            <StyledSection elevation={0}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" paragraph>
                Subscribe to our newsletter for updates and exclusive offers!
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubscribe}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.23)"
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#90caf9"
                      }
                    },
                    "& .MuiInputBase-input": {
                      color: "black"
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#90caf9",
                    "&:hover": {
                      bgcolor: "#42a5f5"
                    }
                  }}
                >
                  Subscribe
                </Button>
                {subscribed && (
                  <Typography
                    variant="body2"
                    color="#90caf9"
                    sx={{ mt: 1 }}
                    role="alert"
                  >
                    Thank you for subscribing!
                  </Typography>
                )}
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <SocialIcon aria-label="Facebook">
                    <BsFacebook size={24} />
                  </SocialIcon>
                  <SocialIcon aria-label="Twitter">
                    <BsTwitter size={24} />
                  </SocialIcon>
                  <SocialIcon aria-label="LinkedIn">
                    <BsLinkedin size={24} />
                  </SocialIcon>
                  <SocialIcon aria-label="Instagram">
                    <BsInstagram size={24} />
                  </SocialIcon>
                </Box>
              </Box>
            </StyledSection>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;