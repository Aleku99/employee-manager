import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.endava.com/">
        Endava
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const MainFooter = ({ title }) => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {title}
      </Typography>
      <Copyright />
    </Box>
  );
};

export default MainFooter;
