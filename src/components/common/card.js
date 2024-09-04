import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const CommonCard = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ backgroundColor: "#0a0a0a", padding: 2, borderRadius: "16px" }}>
      {imageUrl && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            backgroundImage: "linear-gradient(143deg, #252546, #0c0c25)",
            width: "80px",
            height: "80px",
            mb: 2,
            ml:2
          }}
        >
          <Box
            component="img"
            src={imageUrl}
            alt={title}
            sx={{
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              pl:3
            }}
          />
        </Box>
      )}
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          gutterBottom
          sx={{
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "700",
            lineHeight: "1.3em",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#a5a6a7",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
