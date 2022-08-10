import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ConstructionIcon from "@mui/icons-material/Construction";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Modal from "../../components/Modal/Modal";
import SkillsForm from "../../components/SkillsForm/SkillsForm";
import AddSkillForm from "../../components/AddSkillForm/AddSkillForm";
import SkillsList from "../../components/SkillsList/SkillsList";
import useSkills from "../../hooks/useSkills";
import { useEffect } from "react";

const UserSkills = ({
  userId,
  name,
  surname,
  grade,
  department,
  mainTechnology,
}) => {
  const [modalType, setmodalType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [
    skillsList,
    setSkillsList,
    skillToEdit,
    setSkillToEdit,
    updateSkill,
    deleteSkill,
    fetchSkills,
    addSkill,
  ] = useSkills();
  useEffect(() => {
    fetchSkills(0);
  }, []);
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
          <SkillsList
            setOpenModal={setOpenModal}
            setmodalType={setmodalType}
            setSkillToEdit={setSkillToEdit}
            skillsList={skillsList}
            fetchSkills={fetchSkills}
            deleteSkill={deleteSkill}
          />
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setmodalType("ADD");
              setOpenModal(true);
            }}
            sx={{ display: "block", marginTop: "1rem" }}
          >
            Add skill
          </Button>
        </CardContent>
      </Card>
      <Modal
        title={modalType === "EDIT" ? "Edit skill" : "Add skill"}
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        {modalType === "EDIT" ? (
          <SkillsForm
            recordForEdit={null}
            addOrEdit={() => {}}
            skillToEdit={skillToEdit}
            userId={userId}
            updateSkill={updateSkill}
            setOpenModal={setOpenModal}
            fetchSkills={fetchSkills}
          />
        ) : (
          <AddSkillForm
            recordForEdit={null}
            addOrEdit={() => {}}
            skillToEdit={skillToEdit}
            userId={userId}
            updateSkill={updateSkill}
            setOpenModal={setOpenModal}
            fetchSkills={fetchSkills}
            addSkill={addSkill}
          />
        )}
      </Modal>
    </Container>
  );
};

export default UserSkills;
