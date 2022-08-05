import React, { useEffect } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { Grid } from "@material-ui/core";
import { useStyles } from "./EmployeeForm.style";

import { useForm } from "../../hooks/useForm-hook";

const initialFValues = {
  name: "",
  surname: "",
  grade: "",
  department: "",
  mainTech: "",
};

function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required.";
    if ("surname" in fieldValues)
      temp.surname = fieldValues.surname ? "" : "Surname is required.";
    if ("grade" in fieldValues)
      temp.grade = fieldValues.grade ? "" : "Grade is required";
    if ("department" in fieldValues)
      temp.department = fieldValues.department ? "" : "Department is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {
      name: "",
      surname: "",
      grade: "",
      department: "",
    };

    const isValid = validate();
    if (props.type === "addEmployee") {
      if (values.name === undefined || values.name === "") {
        error.name = "Name is required.";
      }
      if (values.surname === undefined || values.surname === "") {
        error.surname = "Surname is required.";
      }
      if (values.grade === undefined || values.grade === "") {
        error.grade = "Grade is required.";
      }
      if (values.department === undefined || values.department === "") {
        error.department = "Department is required.";
      }
      setErrors({ ...error });
    }

    if (!!isValid) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit !== null)
      setValues({
        ...recordForEdit,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Input
            label="Surname"
            name="surname"
            value={values.surname}
            onChange={handleInputChange}
            error={errors.surname}
          />
          <Input
            label="Grade"
            name="grade"
            value={values.grade}
            onChange={handleInputChange}
            error={errors.grade}
          />
          <Input
            label="Department"
            name="department"
            value={values.department}
            onChange={handleInputChange}
            error={errors.department}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <Button type="submit" text="Submit" />
            <Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
