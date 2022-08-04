import { useState } from "react";
import { SKILLS_MOCK } from "../mocks/skillsMock";
const useSkills = () => {
  const [skillsList, setSkillsList] = useState(SKILLS_MOCK);
  const [skillToEdit, setSkillToEdit] = useState("");

  return [skillsList, setSkillsList, skillToEdit, setSkillToEdit];
};

export default useSkills;
