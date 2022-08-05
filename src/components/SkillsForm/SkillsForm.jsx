import React, { useEffect } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { Grid } from "@material-ui/core";
import { useStyles } from "./SkillsForm.style";

import { useForm } from "../../hooks/useForm-hook";

let initialFValues = {
  skill: "",
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

export default function SkillsForm(props) {
  const {
    addOrEdit,
    recordForEdit,
    skillToEdit,
    userId,
    updateSkill,
    setOpenModal,
    fetchSkills,
  } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

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
  const setInitialFValues = (skillToEdit, initialFValues) => {
    if ("rating" in skillToEdit) {
      initialFValues.rating = "";
    } else {
      initialFValues.value = "";
    }
    return initialFValues;
  };

  initialFValues = setInitialFValues(skillToEdit, initialFValues);

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formInput1 = values.skill;
      const formInput2 = "rating" in skillToEdit ? values.rating : values.value;
      updateSkill(skillToEdit, userId, formInput1, formInput2);
      setOpenModal(false);
      fetchSkills(0);
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
            name="skill"
            label="Skill"
            value={values.skill}
            onChange={handleInputChange}
            error={errors.skill}
          />
          <Input
            name={"rating" in skillToEdit ? "rating" : "value"}
            label={"rating" in skillToEdit ? "Rating" : "Value"}
            value={"rating" in skillToEdit ? values.rating : values.value}
            onChange={handleInputChange}
            error={"rating" in skillToEdit ? errors.rating : errors.value}
            type={"rating" in skillToEdit ? "number" : "text"}
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
