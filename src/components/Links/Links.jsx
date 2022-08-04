import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Links(props) {
  const { flexG, link, text } = props;
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flexGrow: flexG,
          display: { sm: "block" },
          padding: "1rem",
        }}
      >
        <Link to={link} style={{ textDecoration: "none", color: "white" }}>
          {text}
        </Link>
      </Typography>
    </>
  );
}

export default Links;
