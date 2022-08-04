import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHttpClient } from "../../hooks/http-hook";
import { SKILLS_MOCK } from "../../mocks/skillsMock";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};
const NONE = "none";
const SkillsList = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [skillsList, setSkillsList] = useState(SKILLS_MOCK); //need to make a request for this to back-end
  const handleSkillDelete = (skill) => () => {
    console.log("Delete " + skill);
    //MAKE request to backend to set technology name to "none", update state inside app
    Object.keys(skillsList).forEach(function (key) {
      console.log(key);
      if (skillsList[key].technologyName === skill) {
        setSkillsList((prevState) => {
          return { ...prevState, [key]: { technologyName: "none", rating: 0 } };
        });
      }
    });
  };
  const handleSkillEdit = (skill) => async () => {
    //const response = await sendRequest("http://localhost:8080/user?userId=0");
    //CAN'T make request from localhost because of CORS
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {skillsList.mainTechnology.technologyName.toLowerCase() !== NONE ? (
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

      {skillsList.secondaryTechnology.technologyName.toLowerCase() !== NONE ? (
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
      {skillsList.cloudKnowledge.technologyName.toLowerCase() !== NONE ? (
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
      {skillsList.linuxKnowledge.technologyName.toLowerCase() !== NONE ? (
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
