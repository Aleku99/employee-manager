import React from "react";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";

function ExportData(props) {
  const { cards } = props;
  console.log(cards);
  let excelArray = [];
  for (let i = 0; i < cards.length; i++) {
    excelArray.push({
      Id: cards[i].userId,
      Name: cards[i].name,
      Surname: cards[i].surname,
      Grade: cards[i].grade,
      Department: cards[i].department,
      "Main Technology": cards[i].mainTechnology.technologyName,
      "Main Rating": cards[i].mainTechnology.rating,
      "Secondary Technology": cards[i].secondaryTechnology.technologyName,
      "Secondary Rating": cards[i].secondaryTechnology.rating,
      "Cloud Knowledge": cards[i].cloudKnowledge.technologyName,
      "Cloud Rating": cards[i].cloudKnowledge.rating,
      "Linux Knowledge": cards[i].linuxKnowledge.technologyName,
      "Linux Rating": cards[i].linuxKnowledge.value ? "Yes" : "No",
    });
  }
  const handleExport = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(excelArray);
    console.log(ws);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained" onClick={handleExport}>
          Export
        </Button>
      </Container>
    </>
  );
}

export default ExportData;
