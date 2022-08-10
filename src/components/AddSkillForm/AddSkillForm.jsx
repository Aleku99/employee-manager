import { useStyles } from "./AddSkillForm.style";
import React, { useEffect } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { Grid } from "@material-ui/core";

import { useForm } from "../../hooks/useForm-hook";

let initialFValues = {
  skill: "",
  type: "",
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

export default function AddSkillForm(props) {
  const {
    addOrEdit,
    recordForEdit,
    skillToEdit,
    userId,
    updateSkill,
    setOpenModal,
    fetchSkills,
    addSkill,
  } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("type" in fieldValues) {
      temp.type =
        fieldValues.type.toLowerCase() === "main" ||
        fieldValues.type.toLowerCase() === "secondary" ||
        fieldValues.type.toLowerCase() === "linux" ||
        fieldValues.type.toLowerCase() === "cloud"
          ? ""
          : "Skill type must be main/secondary/cloud/linux";
    }
    if ("skill" in fieldValues) {
      temp.skill = fieldValues.skill ? "" : "Skill is required.";
    }
    if ("rating" in fieldValues) {
      temp.rating = fieldValues.rating ? "" : "Rating is required.";
    } else if ("value" in fieldValues) {
      temp.value =
        fieldValues.value === "true" || fieldValues.value === "false"
          ? ""
          : "Value is required (true/false)";
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === "");
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formInput1 = values.type.toLowerCase();
      const formInput2 = values.skill;
      const formInput3 =
        values.type.toLowerCase() === "linux" ? values.value : values.rating;
      addSkill(0, formInput1, formInput2, formInput3);
      setOpenModal(false);
      setTimeout(() => {
        fetchSkills(0);
      }, 100);
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
            name="type"
            label="Type"
            value={values.type}
            onChange={handleInputChange}
            error={errors.type}
          />
          <Input
            name="skill"
            label="Skill"
            value={values.skill}
            onChange={handleInputChange}
            error={errors.skill}
          />
          <Input
            name={values.type.toLowerCase() === "linux" ? "value" : "rating"}
            label={values.type.toLowerCase() === "linux" ? "Value" : "Rating"}
            value={
              values.type.toLowerCase() === "linux"
                ? values.value
                : values.rating
            }
            onChange={handleInputChange}
            error={
              values.type.toLowerCase() === "linux"
                ? errors.value
                : errors.rating
            }
            type={values.type.toLowerCase() === "linux" ? "text" : "number"}
            inputProps={{ min: 0, max: 5 }}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <Button type="submit" text="Submit" />
            <Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
