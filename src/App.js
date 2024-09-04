import React from "react";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, Container, Box } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <Box
        sx={{
         
          height: "100%",
          // backgroundColor:"#0a0a0a",
          // backgroundSize: "cover",  
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Dashboard />
      </Box>
    </div>
  );
}

export default App;
