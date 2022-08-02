import * as React from "react";

import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Modal from "../Modal/Modal";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const CardItem = ({ employee }) => {
  const { name, surname, grade, department, mainTech } = employee;

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <CardContent sm={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {`${name} ${surname}`}
        </Typography>
        <Typography gutterBottom component="h2">
          Grade: {grade}
        </Typography>
        <Typography>Department: {department}</Typography>
        <Typography>Department: {mainTech}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Edit
        </Button>
      </CardActions>
      <Modal
        title="Edit Employee Form"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <EmployeeForm recordForEdit={undefined} addOrEdit={undefined} />
      </Modal>
    </>
  );
};

export default CardItem;
