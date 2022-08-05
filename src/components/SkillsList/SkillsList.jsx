import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};
const SkillsList = ({
  setOpenModal,
  setmodalType,
  setSkillToEdit,
  skillsList,
  fetchSkills,
  deleteSkill,
}) => {
  const handleSkillDelete = (skill) => () => {
    deleteSkill(0, skill);
    fetchSkills(0);
  };
  const handleSkillEdit = (skill) => () => {
    setmodalType("EDIT");
    Object.keys(skillsList).forEach(function (key) {
      if (skillsList[key] !== null)
        if (skillsList[key].technologyName === skill) {
          let newSkill = {
            technologyName: skill,
          };
          if (key === "mainTechnology") {
            newSkill.isMain = true;
            newSkill.rating = 0;
          } else if (key === "secondaryTechnology") {
            newSkill.isMain = false;
            newSkill.rating = 0;
          } else if (key === "cloudKnowledge") {
            newSkill.rating = 0;
          } else if (key === "linuxKnowledge") {
            newSkill.value = false;
          }
          setSkillToEdit(newSkill);
          setOpenModal(true);
        }
    });
  };

  console.log(skillsList.linuxKnowledge.technologyName);
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {skillsList.mainTechnology !== null &&
      skillsList.mainTechnology.technologyName !== null ? (
        <ListItem
          divider
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillEdit(
                  skillsList.mainTechnology.technologyName
                )}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillDelete(
                  skillsList.mainTechnology.technologyName
                )}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={`Main technology: ${skillsList.mainTechnology.technologyName}`}
            secondary={`rating: ${skillsList.mainTechnology.rating}`}
          />
        </ListItem>
      ) : (
        <></>
      )}

      {skillsList.secondaryTechnology !== null &&
      skillsList.secondaryTechnology.technologyName !== null ? (
        <ListItem
          divider
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillEdit(
                  skillsList.secondaryTechnology.technologyName
                )}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillDelete(
                  skillsList.secondaryTechnology.technologyName
                )}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={`Secondary technology: ${skillsList.secondaryTechnology.technologyName}`}
            secondary={`rating: ${skillsList.secondaryTechnology.rating}`}
          />
        </ListItem>
      ) : (
        <></>
      )}
      {skillsList.cloudKnowledge !== null &&
      skillsList.cloudKnowledge.technologyName !== null ? (
        <ListItem
          divider
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillEdit(
                  skillsList.cloudKnowledge.technologyName
                )}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillDelete(
                  skillsList.cloudKnowledge.technologyName
                )}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={`Cloud knowledge: ${skillsList.cloudKnowledge.technologyName}`}
            secondary={`rating: ${skillsList.cloudKnowledge.rating}`}
          />
        </ListItem>
      ) : (
        <></>
      )}
      {skillsList.linuxKnowledge !== null &&
      skillsList.linuxKnowledge.technologyName !== null ? (
        <ListItem
          divider
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillEdit(
                  skillsList.linuxKnowledge.technologyName
                )}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleSkillDelete(
                  skillsList.linuxKnowledge.technologyName
                )}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={`Linux knowledge: ${skillsList.linuxKnowledge.technologyName}`}
            secondary={`value: ${skillsList.linuxKnowledge.value}`}
          />
        </ListItem>
      ) : (
        <></>
      )}
    </List>
  );
};
export default SkillsList;
