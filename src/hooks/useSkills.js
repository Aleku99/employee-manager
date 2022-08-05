import { useState } from "react";
import { SKILLS_MOCK } from "../mocks/skillsMock";
const useSkills = () => {
  const [skillsList, setSkillsList] = useState(SKILLS_MOCK);
  const [skillToEdit, setSkillToEdit] = useState({});

  const updateSkill = async (skill, userId, formInput1, formInput2) => {
    let updatedSkill = { ...skill, userId: 0 };

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
    if ("isMain" in updatedSkill) {
      try {
        const response = await fetch(
          `http://localhost:8080/skill/technology?userId=${updatedSkill.userId}&technologyName=${updatedSkill.technologyName}&rating=${updatedSkill.rating}&isMain=${updatedSkill.isMain}`,
          { method: "POST" }
        );
      } catch (e) {
        alert("User skill update was not successfull");
        console.log(e);
      }
    } else if ("value" in updatedSkill) {
      try {
        const response = await fetch(
          `http://localhost:8080/skill/linux?userId=${updatedSkill.userId}&technologyName=${updatedSkill.technologyName}&value=${updatedSkill.value}`,
          { method: "POST" }
        );
      } catch (e) {
        alert("User skill update was not successfull");
        console.log(e);
      }
    } else {
      try {
        const response = await fetch(
          `http://localhost:8080/skill/cloud?userId=${updatedSkill.userId}&technologyName=${updatedSkill.technologyName}&rating=${updatedSkill.rating}`,
          { method: "POST" }
        );
      } catch (e) {
        alert("User skill update was not successfull");
        console.log(e);
      }
    }
  };
  const deleteSkill = (skill) => {
    //MAKE request to backend and update state
    Object.keys(skillsList).forEach(function (key) {
      if (skillsList[key] !== null)
        if (skillsList[key].technologyName === skill) {
          setSkillsList((prevState) => {
            return { ...prevState, [key]: null };
          });
        }
    });
  };
  const fetchSkills = async (userId) => {
    const response = await fetch(`http://localhost:8080/user?userId=${userId}`);
    const user = await response.json();
    const skills = {
      mainTechnology: user.mainTechnology,
      secondaryTechnology: user.secondaryTechnology,
      cloudKnowledge: user.cloudKnowledge,
      linuxKnowledge: user.linuxKnowledge,
    };
    setSkillsList(skills);
  };

  return [
    skillsList,
    setSkillsList,
    skillToEdit,
    setSkillToEdit,
    updateSkill,
    deleteSkill,
    fetchSkills,
  ];
};

export default useSkills;
