import React, { useEffect } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { Grid } from "@material-ui/core";
import { useStyles } from "./SkillsForm.style";

import { useForm } from "../../hooks/useForm-hook";

const initialFValues = {
  skill: "",
  rating: "",
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
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("skill" in fieldValues) {
      temp.skill = fieldValues.skill ? "" : "Skill is required.";
    }
    if ("rating" in fieldValues) {
      temp.rating = fieldValues.rating ? "" : "Rating is required.";
    }
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
    if (validate()) {
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
            name="skill"
            label="Skill"
            value={values.skill}
            onChange={handleInputChange}
            error={errors.skill}
          />
          <Input
            name="rating"
            label="Rating"
            value={values.rating}
            onChange={handleInputChange}
            error={errors.rating}
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
