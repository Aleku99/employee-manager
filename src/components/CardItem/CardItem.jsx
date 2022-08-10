import * as React from "react";

import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Modal from "../Modal/Modal";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useNavigate } from "react-router-dom";

import { useHttpClient } from "../../hooks/http-hook";

const CardItem = ({ employee }) => {
  const { name, surname, grade, department, mainTechnology } = employee;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [openModal, setOpenModal] = React.useState(false);
  let navigate = useNavigate();

  const editEmployee = (employee, resetForm) => {
    //TODO: update employee here
    console.log(employee);
    resetForm();
    setOpenModal(false);
  };

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
        <Button
          size="small"
          onClick={() => {
            navigate(`/user-skills/${employee.userId}`, { replace: true });
          }}
        >
          Open Skills
        </Button>
      </CardActions>
      <Modal
        title="Edit Employee Form"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <EmployeeForm
          isEditable
          recordForEdit={employee}
          addOrEdit={editEmployee}
        />
      </Modal>
    </>
  );
};

export default CardItem;
