import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";

import ActionButton from "../Button/ActionButton";
import CloseIcon from "@material-ui/icons/Close";

import { useStyles } from "./Modal.style";

export default function Modal(props) {
  const { title, children, openModal, setOpenModal } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openModal}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ActionButton
            color="primary"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <CloseIcon />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
