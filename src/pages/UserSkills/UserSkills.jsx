import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ConstructionIcon from "@mui/icons-material/Construction";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

const UserSkills = ({ name, surname, grade, department, mainTechnology }) => {
  const [skillsList, setSkillsList] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS",
    "ExpressJS",
    "mySQL",
    "MongoDB",
  ]);
  const handleClick = () => {};
  const handleDelete = (skill) => () => {
    setSkillsList((prevState) => {
      return prevState.filter((prevSkill) => prevSkill !== skill);
    });
  };
  const skills = skillsList.map((skill, index) => (
    <Chip
      key={index}
      clickable
      onDelete={handleDelete(skill)}
      onClick={handleClick}
      size="large"
      label={skill}
    />
  ));
  return (
    <Container maxWidth="xl" sx={{ marginTop: "2rem" }}>
      <Card sx={{ margin: "1rem", border: "solid 1px lightgrey" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#1976d2" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <AccountBoxIcon />
              Basic details
            </div>
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1976d2" }}
          >
            Full name: {`${name} ${surname}`}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1976d2" }}
          >
            Grade: {`${grade}`}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1976d2" }}
          >
            Department: {`${department}`}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#1976d2" }}
          >
            Main technology: {`${mainTechnology}`}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ margin: "1rem", border: "solid 1px lightgrey" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#1976d2" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ConstructionIcon />
              Skills
            </div>
          </Typography>
          {skills}
          <Button
            variant="contained"
            size="small"
            sx={{ display: "block", marginTop: "1rem" }}
          >
            Add skill
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserSkills;
