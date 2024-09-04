import React, { useState } from "react";
import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FeatureCard = ({ imageUrl, title, description }) => {
  const titleToImageWidth = {
    "Write SEO Content": "100%",
    "Target right user": "60%",
    "Accelerate with powerful analytics": "90%",
    "Task Management":"80%"
  };
  const imageWidth = titleToImageWidth[title] || "100%";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        border: "1px solid #232323",
        px: isMobile ? 3 : 6,
        pt:  6,
        pb: isMobile ? 1: 3,
        borderRadius: "16px",
        position: "relative",
        cursor: "pointer",
        ":hover": {
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6697ec51a8dd714b4a97b818/66b47c9b6f640ddbab256bc4_Blur%20Effect.avif')",
          border: "1px solid #4f1ad6",
        },
      }}
    >
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: imageWidth,
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
      )}
      <CardContent sx={{ textAlign: "center", py: 2 }}>
        <Typography
          sx={{
            fontWeight: "700",
            marginBottom: 1,
            fontSize: "1.125rem",
            color: "white",
            my: 2,
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
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
