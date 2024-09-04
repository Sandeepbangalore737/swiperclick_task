import React, { useState } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

const CustomersCard = ({ imageUrl, title, description, avatarImage, name }) => {
  
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        height: "100%",
        border: "1px solid #232323",
        px: 6,
        pt: 6,
        pb: 3,        
        borderRadius: "16px",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66b3e070a6470bf89b06a778_Stars.svg"
        alt={title}
        sx={{
          width: "45%",
          borderRadius: "8px",
          objectFit: "contain",
        }}
      />

      <CardContent sx={{ textAlign: "left", pt: 4, px:0 }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "400",
            color: "#a5a6a7",
            lineHeight: "1.65em"
          }}
        >
          {description}
        </Typography>
        <Box display="flex" alignItems="center" pt={4}>
          <Avatar
            alt={name}
            src={avatarImage}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1.125rem",
                color: "white",
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#a5a6a7",
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomersCard;
