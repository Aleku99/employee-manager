import React from "react";

import { Button } from "@material-ui/core";

import { useStyles } from "./ActionButton.style";

export default function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}
