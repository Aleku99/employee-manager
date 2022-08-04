import { useState } from "react";
import { SKILLS_MOCK } from "../mocks/skillsMock";
const useSkills = () => {
  const [skillsList, setSkillsList] = useState(SKILLS_MOCK);
  const [skillToEdit, setSkillToEdit] = useState({});

  const updateSkill = (skill, userId, formInput1, formInput2) => {
    let updatedSkill = { ...skill, userId: userId };

    if ("rating" in skill) {
      //mainTechnology, secondaryTechnology or cloudKnowledge
      updatedSkill.technologyName = formInput1;
      updatedSkill.rating = formInput2;
    } else {
      //linuxKnoledge
      updatedSkill.technologyName = formInput1;
      updatedSkill.value = formInput2;
    }
    console.log(updatedSkill);
    //MAKE request to backend and update state
  };
  const deleteSkill = (skill) => {
    //MAKE request to backend and update state
    Object.keys(skillsList).forEach(function (key) {
      console.log(key);
      if (skillsList[key].technologyName === skill) {
        setSkillsList((prevState) => {
          return { ...prevState, [key]: { technologyName: "none", rating: 0 } };
        });
      }
    });
  };

  return [
    skillsList,
    setSkillsList,
    skillToEdit,
    setSkillToEdit,
    updateSkill,
    deleteSkill,
  ];
};

export default useSkills;
