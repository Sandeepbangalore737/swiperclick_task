import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CustomButton from "../components/common/Button";
import { keyframes } from "@mui/system";
import CommonCard from "../components/common/card";
import FeatureCard from "../components/common/featureCard";
import CustomersCard from "../components/common/customersCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import brandLogo from "../assets/images/Logo_H_copy.png"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 10,
    backgroundColor: "#EF4261",
  },
}));

function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const logos = [
    "https://cdn.prod.website-files.com/664366d1e315369f0b0bc41a/664366d1e315369f0b0bc471_Logo%205.svg",
    "https://cdn.prod.website-files.com/664366d1e315369f0b0bc41a/664366d1e315369f0b0bc46f_Logo%204.svg",
    "https://cdn.prod.website-files.com/664366d1e315369f0b0bc41a/664366d1e315369f0b0bc46e_Logo%203.svg",
    "https://cdn.prod.website-files.com/664366d1e315369f0b0bc41a/664366d1e315369f0b0bc472_Logo%202.svg",
    "https://cdn.prod.website-files.com/664366d1e315369f0b0bc41a/664366d1e315369f0b0bc46c_Logo%201.svg",
    "https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a29f7585f42429c9e8ca91_Logo%2006.svg",
  ];

  const scrollAnimation = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  `;
  const [expandedPanels, setExpandedPanels] = useState([]);

  const handleExpansion = (panel) => () => {
    setExpandedPanels((prevExpandedPanels) =>
      prevExpandedPanels.includes(panel)
        ? prevExpandedPanels.filter((p) => p !== panel)
        : [...prevExpandedPanels, panel]
    );
  };
  const accordions = [
    {
      title: "How does SaaS differ from traditional software installations?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Can you explain the pricing models commonly?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "How does SaaS differ from traditional software installations?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "What are the key benefits?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ width: "100%", backgroundColor: "#121124" }}>
      <AppBar
        position="sticky"
        sx={{
          px: isMobile ? "0" : "9%",
          backdropFilter: "blur(20px)",
          background: "#04020a0d",
          boxShadow: "none",
          zIndex: theme.zIndex.drawer + 1,
          borderBottom: "0.03px solid #dddddd2e",
          backgroundColor: "#04020a0d",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            px: isMobile ? "5%" : "16px",
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img
              src={brandLogo}
              loading="lazy"
              alt="Logo"
              width="164px"
            />
          </IconButton>

          {!isMobile && (
            <Box
              sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
            >
              {["About", "Integrations", "Pages", "Features", "Pricing"].map(
                (item) => (
                  <Typography
                    key={item}
                    sx={{
                      color: "white",
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      px: 2,
                      ":hover": {
                        textDecoration: "underline",
                        textDecorationColor: "white",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="cart" sx={{ marginX: isMobile ? 0 : 4 }}>
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
            {!isMobile && (
              <CustomButton buttonType="navbar" variant="contained">
                Sign Up
              </CustomButton>
            )}
          </Box>
          {isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
              {drawerOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "100vh",
            backgroundColor: "#04020a",
            pt: 6,
          },
        }}
      >
        <List sx={{ width: "100vw", padding: 2, backgroundColor: "#04020a" }}>
          {["About", "Integrations", "Pages", "Features", "Pricing"].map(
            (item) => (
              <ListItem button key={item} onClick={toggleDrawer}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.25rem",
                  }}
                />
              </ListItem>
            )
          )}
          <ListItem button onClick={toggleDrawer}>
            <CustomButton variant="contained" sx={{ width: "100%" }}>
              Sign Up
            </CustomButton>
          </ListItem>
        </List>
      </Drawer>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <Box
          sx={{
            pt: isMobile ? "17%" : "6%",
            pb: "1%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#121124",
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: "1px solid #232323",
              borderRadius: "34px 34px 34px",
              px: 3,
              py: 1,
              justifyContent: "space-evenly",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a36398974b4cdaebb15a33_Star.svg"
              loading="lazy"
              alt="Star"
              style={{ height: "24px", px: 1 }}
            />
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 400,
                textAlign: "center",
                px: 1,
              }}
            >
              4.8 Ratings{" "}
            </Typography>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "16px",
                opacity: "0.5",
                px: 1,
              }}
            >
              500 reviews
            </Typography>
          </Box>
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <Box
          sx={{
            px: isMobile ? "8px" : "10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#121124",
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a1fd095dd6b744e70dc20b_Bg%20Img.avif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              mt: isMobile ? 3 : 0,
              fontWeight: 700,
              color: "white",
              fontSize: isMobile ? "2.85rem" : "4.5rem",
            }}
          >
            AI Marketing Mastery
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem", color: "#a5a6a7" }}>
            Are you ready to elevate your productivity to new heights? Say hello
            to Market ai,
            <br /> your all-in-one solution for streamlining workflows,
            optimizing task management,
            <br /> and maximizing efficiency.
          </Typography>
          <CustomButton sx={{ mb: 5, mt: 2 }}>Book Your Demo</CustomButton>
          <Box mb={12}>
            <img
              src="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a1fd088b03bfc0ee50a716_Home%2001%20Hero%20Img.avif"
              loading="lazy"
              alt="Hero"
              style={{
                borderRadius: "20px",
                width: "100%",
                objectFit: "cover",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </ScrollAnimation>

      <Box align="center" mb="7%" sx={{ px: "10%" }}>
        <p style={{ fontSize: "1rem", color: "#a5a6a7", paddingBottom: "2%" }}>
          Join 4,000+ companies already growing
        </p>
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              animation: `${scrollAnimation} 30s linear infinite`,
            }}
          >
            {logos.map((logo, index) => (
              <Box
                component="img"
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                sx={{
                  height: "40px",
                  mx: 6,
                  width: "200%",
                }}
              />
            ))}
            {logos.map((logo, index) => (
              <Box
                component="img"
                key={`duplicate-${index}`}
                src={logo}
                alt={`Logo duplicate ${index + 1}`}
                sx={{
                  height: "40px",
                  mx: 6,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "left" : "center",
          justifyContent: isMobile ? "left" : "center",
          px: isMobile ? "16px" : "0px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #232323",
            borderRadius: "8rem",
            padding: "8px 18px",
            width: "6.5rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Features
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          All your marketing solutions
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          in one platform
        </Typography>
      </Box>
      <Grid container sx={{ px: isMobile ? "5%" : "10%" }} spacing={2} mt="2%">
        <Grid item xs={12} sm={6} md={3}>
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <CommonCard
              title="Fast Really fast"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
              imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b9a3_Fast.svg"
            />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <CommonCard
              title="Advanced Analytics"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
              imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b9a4_Chart.svg"
            />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <CommonCard
              title="Communication Tools"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
              imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b9a1_Communication.svg"
            />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ScrollAnimation animateIn="fadeInUp" duration={1.2}>
            <CommonCard
              title="Customizable"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
              imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b9a0_Edit.svg"
            />
          </ScrollAnimation>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: isMobile ? "16px" : "0px",
          alignItems: isMobile ? "left" : "center",
          justifyContent: isMobile ? "left" : "center",
        }}
        mt={9}
      >
        <Box
          sx={{
            border: "1px solid #232323",
            borderRadius: "8rem",
            padding: "8px 18px",
            width: "6.5rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Features
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          On-page optimization suite <br /> saves you time and resources
        </Typography>
      </Box>
      <Grid container sx={{ px: isMobile ? "8px" : "10%" }} spacing={4} my={8}>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a491d54b25a874069c1989_Bento%2001%20Img.avif"
            title="Write SEO Content"
            description="Ready to take control of your productivity? Sign up for Marketai today and experience the"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a491d507df3f5199feac86_Bento%2002%20Img.avif"
            title="Accelerate with powerful analytics"
            description="Ready to take control of your productivity? Sign up for Marketai today and experience the speed."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a491d57f78e27bf1e1e435_Bento%2003%20Img.avif"
            title="Target right user"
            description="Ready to take control of your productivity? Sign up for Boostify today and experience the difference firsthand."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a491d54b25a874069c1989_Bento%2001%20Img.avif"
            title="High quality image generation"
            description="Ready to take control of your productivity? Sign up for Boostify today and experience the difference firsthand."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a4fccdaa88c4c425e921f4_Bento%2005%20Img.avif"
            title="Goal Tracking"
            description="Ready to take control of your productivity? Sign up for Boostify today and experience the difference firsthand."
          />
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a506a5739b3e60c00130f2_Bento%2006%20Img.avif"
            title="Accelerate with powerful analytics"
            description="Ready to take control of your productivity? Sign up for Boostify today and experience the difference firsthand."
          />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <FeatureCard
            imageUrl="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a506a56c358125c44273e2_Bento%2007%20Img.avif"
            title="Task Management"
            description="Ready to take control of your productivity? Sign up for Boostify today and experience the"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: isMobile ? "16px" : "0px",
          alignItems: isMobile ? "left" : "center",
          justifyContent: isMobile ? "left" : "center",
        }}
        mt={12}
      >
        <Box
          sx={{
            border: "1px solid #232323",
            borderRadius: "8rem",
            padding: "8px 18px",
            width: "8rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Testimonials
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          See What Our Customers <br /> Have to Say!
        </Typography>
      </Box>
      <Grid container sx={{ px: isMobile ? "8px" : "10%" }} spacing={4} my={8}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomersCard
            title="Shahin Alam"
            description={`"Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience delightful. He's truly a valuable ally in our digital endeavors."`}
            avatarImage="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b98e_User%20image%2001.jpg"
            name="CEO, SamirTS"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomersCard
            title="Shahin Alam"
            description={`"Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience delightful. He's truly a valuable ally in our digital endeavors."`}
            avatarImage="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b97c_Person%2005.webp"
            name="CEO, SamirTS"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomersCard
            title="Shahin Alam"
            description={`"Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience delightful. He's truly a valuable ally in our digital endeavors."`}
            avatarImage="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b97a_Person%2002.webp"
            name="CEO, SamirTS"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomersCard
            title="Shahin Alam"
            description={`"Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience delightful. He's truly a valuable ally in our digital endeavors."`}
            avatarImage="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b980_Person%2003.webp"
            name="CEO, SamirTS"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomersCard
            title="Shahin Alam"
            description={`"Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience delightful. He's truly a valuable ally in our digital endeavors."`}
            avatarImage="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b97d_Person%2001.webp"
            name="CEO, SamirTS"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomersCard
            title="Shahin Alam"
            description={`"Working with John was effortless. His quick responses and deep comprehension of our objectives made the experience delightful. He's truly a valuable ally in our digital endeavors."`}
            avatarImage="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/6697ec51a8dd714b4a97b979_Person%2006.webp"
            name="CEO, SamirTS"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: isMobile ? "16px" : "0px",
          alignItems: isMobile ? "left" : "center",
          justifyContent: isMobile ? "left" : "center",
        }}
        mt="10%"
      >
        <Box
          sx={{
            border: "1px solid #232323",
            borderRadius: "8rem",
            padding: "8px 18px",
            width: "6rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Account
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
            mb: 2,
          }}
        >
          Start Your Journey
        </Typography>
        <Typography
          sx={{ fontSize: "1rem", color: "#a5a6a7", fontWeight: "400" }}
        >
          Ready to take control of your productivity? Sign up for Market Ai
          today and <br /> experience the difference firsthand.
        </Typography>
      </Box>
      <Grid
        container
        sx={{ px: isMobile ? "8px" : "10%", my: isMobile ? 3 : 6 }}
        spacing={isMobile ? 2 : 8}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              backgroundColor: "#121124",
              padding: isMobile ? 0 : 2,
              pt: isMobile ? 0 : 6,
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #232323",
                borderRadius: "8rem",
                padding: "8px 0px 8px 18px",
                width: "6.3rem",
                ml: 2,
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                Features
              </Typography>
            </Box>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                gutterBottom
                sx={{
                  color: "white",
                  fontSize: "2.625rem",
                  fontWeight: "700",
                  lineHeight: "1.3em",
                }}
              >
                Actionable Insights
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#a5a6a7",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla,
              </Typography>
              <CustomButton buttonType="navbar" sx={{ fontSize: "1rem" }}>
                Learn More
              </CustomButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              backgroundColor: "#121124",
              px: isMobile ? 3 : 6,
              pt: 6,
              pb: 6,
              borderRadius: "16px",
              border: "1px solid #232323",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a7bb502519d4406ea95a55_Service%20Img%2001.avif"
              style={{ width: "100%", objectFit: "cover" }}
              alt=""
            />
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        px="10%"
        spacing={isMobile ? 2 : 8}
        sx={{ px: isMobile ? "8px" : "10%", my: isMobile ? 3 : 6 }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              backgroundColor: "#121124",
              px: isMobile ? 3 : 6,
              pt: 6,
              pb: 6,
              borderRadius: "16px",
              border: "1px solid #232323",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66abff4af81500287d465ad1_Integrations%20Icon.avif"
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              backgroundColor: "#121124",
              pt: 6,
              borderRadius: "16px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #232323",
                borderRadius: "8rem",
                padding: "8px 0px 8px 18px",
                width: "7rem",
                ml: 2,
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                Integration
              </Typography>
            </Box>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                gutterBottom
                sx={{
                  color: "white",
                  fontSize: isMobile ? "2rem" : "2.625rem",
                  fontWeight: "700",
                  lineHeight: "1.3em",
                }}
              >
                Seamlessly Connect All Your Apps{" "}
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: "#a5a6a7",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla,
              </Typography>
              <CustomButton buttonType="navbar" sx={{ fontSize: "1rem" }}>
                Learn More
              </CustomButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box align="center" mt="11%">
        <Box
          sx={{
            border: "1px solid #232323",
            borderRadius: "8rem",
            padding: "8px 18px",
            width: "6.5rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Features
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          Latest From Blog
        </Typography>
        <Typography
          sx={{ fontSize: "1rem", color: "#a5a6a7", fontWeight: "400" }}
        >
          We offer a variety of interesting features that you can help increase
          your <br /> productivity at work and manage your project essay
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{ my: isMobile ? 0 : 8, px: isMobile ? "5%" : "10%" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#121124",
              cursor: "pointer",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b821/66b47a4b66ccc8fe2181c3d3_Blog%20img%205.avif"
              alt="Paella dish"
              sx={{
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                transformOrigin: "center",
                ":hover": {
                  transform: "scale(1.1) perspective(1000px)",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#a5a6a7",
                my: 4,
              }}
            >
              October 10, 2023{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.65rem",
                fontWeight: "600",
                color: "white",
                mb: 3,
              }}
            >
              Why We Love Figma
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "#a5a6a7", fontWeight: "400" }}
            >
              We love Figma for its unparalleled synergy with the dynamic world
              of UI/UX design. Figma transcends traditional design.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#121124",
              cursor: "pointer",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b821/66b47b5d3d3bd1623950c602_Marketing%20Ai%20Saas%20Research.avif"
              alt="Paella dish"
              sx={{
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                transformOrigin: "center",
                ":hover": {
                  transform: "scale(1.1) perspective(1000px)",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#a5a6a7",
                my: 4,
              }}
            >
              October 10, 2023{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.65rem",
                fontWeight: "600",
                color: "white",
                mb: 3,
              }}
            >
              Our $3,0k Round Investors{" "}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "#a5a6a7", fontWeight: "400" }}
            >
              Our $3.0k round investors play a crucial role in shaping the
              future of our venture. Their investment represents not just.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#121124",
              cursor: "pointer",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b821/66b479613cee3aaaf7a242d9_Blog%20img%2001.avif"
              alt="Paella dish"
              sx={{
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                transformOrigin: "center",
                ":hover": {
                  transform: "scale(1.1) perspective(1000px)",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "400",
                color: "#a5a6a7",
                my: 4,
              }}
            >
              November 21, 2023{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.65rem",
                fontWeight: "600",
                color: "white",
                mb: 3,
              }}
            >
              Automating Daily Tasks
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "#a5a6a7", fontWeight: "400" }}
            >
              Automating daily tasks is not just about efficiency; it's a
              transformative approach to user experience design.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Box align="center" sx={{ mt: isMobile ? "20%" : "11%" }}>
        <Box
          sx={{
            border: "1px solid #232323",
            borderRadius: "8rem",
            padding: "8px 18px",
            width: "6.5rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
            }}
          >
            Features
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isMobile ? "2.4rem" : "3rem",
            fontWeight: "600",
            color: "white",
          }}
        >
          Answer to your question.
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#a5a6a7",
            fontWeight: "400",
            px: "5%",
          }}
        >
          We offer a variety of interesting features that you can help increase
          your
          <br /> productivity at work and manage your project essay
        </Typography>
      </Box>
      <Box sx={{ px: isMobile ? "5%" : "22%" }} my={8}>
        {accordions.map((accordion, index) => {
          const isExpanded = expandedPanels.includes(`panel${index}`);
          return (
            <Accordion
              key={index}
              expanded={isExpanded}
              onChange={handleExpansion(`panel${index}`)}
              sx={{
                color: "white",
                backgroundColor: "transparent",
                borderColor: "#232323",
                borderRadius: "6px",
                borderWidth: "1px",
                borderStyle: "solid",
                marginBottom: "16px",
                boxShadow: "none",
                px: isMobile ? "0.5rem" : 2,
                py: 1,
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  isExpanded ? (
                    <CloseIcon sx={{ color: "white" }} />
                  ) : (
                    <AddIcon sx={{ color: "white" }} />
                  )
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  sx={{
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  {accordion.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#a5a6a7",
                    lineHeight: "36px",
                  }}
                >
                  {accordion.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <Box
        sx={{
          backgroundColor: "#121124",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a1fd095dd6b744e70dc20b_Bg%20Img.avif')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: "10%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#121124",
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66a1fd095dd6b744e70dc20b_Bg%20Img.avif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={brandLogo}
            alt=""
            width="164px"
          />
          <Typography
            variant="h2"
            sx={{
              my: 2,
              fontWeight: 700,
              color: "white",
              fontSize: isMobile ? "2.4rem" : "3rem",
            }}
          >
            Unlock Your Full Potential with
            <br /> Market Ai
          </Typography>

          <CustomButton sx={{ mb: 5, mt: 2 }}>Get Started Now</CustomButton>
        </Box>
        <Box
          align="center"
          sx={{
            display: isMobile ? "block" : "flex",
            px: isMobile ? "5%" : "11%",
            py: 4,
          }}
          justifyContent="space-between"
          pb="5%"
        >
          <Box>
            <Typography
              sx={{
                fontSize: isMobile ? "0.875rem" : "1rem",
                color: "rgb(165, 166, 167)",
                paddingBottom: "2%",
                cursor: "pointer",
              }}
            >
              {" "}
              © 2024 Webflow All right reserved.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: isMobile ? "0.875rem" : "1rem",
                color: "rgb(165, 166, 167)",
                px: isMobile ? 1 : 2,
              }}
            >
              License
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: isMobile ? "0.875rem" : "1rem",
                color: "rgb(165, 166, 167)",
                px: isMobile ? 1 : 2,
              }}
            >
              Style Guide
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: isMobile ? "0.875rem" : "1rem",
                color: "rgb(165, 166, 167)",
                px: isMobile ? 1 : 2,
              }}
            >
              Cookie Settings
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
