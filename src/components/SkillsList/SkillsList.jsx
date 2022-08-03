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
const SkillsList = () => {
  const [skillsList, setSkillsList] = useState({
    mainTechnology: { technologyName: "React", rating: 3 },
    secondaryTechnology: { technologyName: "NodeJS", rating: 1 },
    cloudKnowledge: { technologyName: "AWS", rating: 0 },
    linuxKnowledge: { technologyName: "Bash", value: true },
  });
  const handleSkillDelete = (skill) => () => {
    setSkillsList((prevState) => {
      return prevState.filter((prevSkill) => prevSkill !== skill);
    });
  };
  const handleSkillEdit = () => {};
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem
        divider
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
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
      <ListItem
        divider
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
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
      <ListItem
        divider
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
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
      <ListItem
        divider
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
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
    </List>
  );
};
export default SkillsList;
