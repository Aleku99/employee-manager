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
          { method: "PUT" }
        );
      } catch (e) {
        alert("User skill update was not successfull");
        console.log(e);
      }
    } else if ("value" in updatedSkill) {
      try {
        const response = await fetch(
          `http://localhost:8080/skill/linux?userId=${updatedSkill.userId}&technologyName=${updatedSkill.technologyName}&value=${updatedSkill.value}`,
          { method: "PUT" }
        );
      } catch (e) {
        alert("User skill update was not successfull");
        console.log(e);
      }
    } else {
      try {
        const response = await fetch(
          `http://localhost:8080/skill/cloud?userId=${updatedSkill.userId}&technologyName=${updatedSkill.technologyName}&rating=${updatedSkill.rating}`,
          { method: "PUT" }
        );
      } catch (e) {
        alert("User skill update was not successfull");
        console.log(e);
      }
    }
  };
  const deleteSkill = async (userId, skill) => {
    //MAKE request to backend and update state
    console.log(skill);
    Object.keys(skillsList).forEach(async function (key) {
      if (skillsList[key] !== null)
        if (skillsList[key].technologyName === skill) {
          console.log(key);
          console.log(skillsList[key]);
          switch (key) {
            case "mainTechnology": {
              try {
                await fetch(
                  `http://localhost:8080/skill/technology?userId=${userId}&isMain=true`,
                  { method: "PUT" }
                );
              } catch (e) {
                alert("SKill was not deleted succesfully");
              }
              break;
            }
            case "secondaryTechnology": {
              try {
                await fetch(
                  `http://localhost:8080/skill/technology?userId=${userId}&isMain=false`,
                  { method: "PUT" }
                );
              } catch (e) {
                alert("Skill was not deleted succesfully");
              }
              break;
            }
            case "linuxKnowledge": {
              try {
                await fetch(
                  `http://localhost:8080/skill/linux?userId=${userId}`,
                  {
                    method: "PUT",
                  }
                );
              } catch (e) {
                alert("Skill was not deleted succesfully");
              }
              break;
            }
            case "cloudKnowledge": {
              try {
                await fetch(
                  `http://localhost:8080/skill/cloud?userId=${userId}`,
                  {
                    method: "PUT",
                  }
                );
              } catch (e) {
                alert("Skill was not deleted succesfully");
              }
              break;
            }
            default:
          }
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
