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
    Object.keys(skillsList).forEach(async function (key) {
      if (skillsList[key] !== null)
        if (skillsList[key].technologyName === skill) {
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
    try {
      const response = await fetch(
        `http://localhost:8080/user?userId=${userId}`
      );
      const user = await response.json();
      const skills = {
        mainTechnology: user.mainTechnology,
        secondaryTechnology: user.secondaryTechnology,
        cloudKnowledge: user.cloudKnowledge,
        linuxKnowledge: user.linuxKnowledge,
      };
      setSkillsList(skills);
    } catch (e) {
      console.log(e);
      alert("Skills were not fetched successfully");
    }
  };

  const addSkill = async (userId, type, skill, value) => {
    switch (type) {
      case "main":
        try {
          await fetch(
            `http://localhost:8080/skill/technology?userId=${userId}&technologyName=${skill}&rating=${value}&isMain=true`,
            {
              method: "PUT",
            }
          );
        } catch (e) {
          console.log(e);
          alert("Skill was not added successfully");
        }
        break;
      case "secondary":
        try {
          await fetch(
            `http://localhost:8080/skill/technology?userId=${userId}&technologyName=${skill}&rating=${value}&isMain=false`,
            {
              method: "PUT",
            }
          );
        } catch (e) {
          console.log(e);
          alert("Skill was not added successfully");
        }
        break;
      case "cloud":
        try {
          await fetch(
            `http://localhost:8080/skill/cloud?userId=${userId}&technologyName=${skill}&rating=${value}`,
            {
              method: "PUT",
            }
          );
        } catch (e) {
          console.log(e);
          alert("Skill was not added successfully");
        }
        break;
      case "linux":
        try {
          await fetch(
            `http://localhost:8080/skill/linux?userId=${userId}&technologyName=${skill}&value=${value}`,
            {
              method: "PUT",
            }
          );
        } catch (e) {
          console.log(e);
          alert("Skill was not added successfully");
        }
        break;
      default:
    }
  };

  return [
    skillsList,
    setSkillsList,
    skillToEdit,
    setSkillToEdit,
    updateSkill,
    deleteSkill,
    fetchSkills,
    addSkill,
  ];
};

export default useSkills;
