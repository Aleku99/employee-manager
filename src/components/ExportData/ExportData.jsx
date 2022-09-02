import React from "react";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";
import { useState } from "react";

function ExportData(props) {
  const { cards } = props;

  let excelArray = [];
  // Rename the linuxKnowledge.value to rating
  let tmpCards = JSON.parse(JSON.stringify(cards));
  for (const [index, userObject] of Object.entries(cards)) {
    for (const [userKey, userInfo] of Object.entries(userObject)) {
      if (typeof userInfo === "object") {
        for (const [skillKey, skillInfo] of Object.entries(userInfo)) {
          if (skillKey === "value") {
            tmpCards[index][userKey]["rating"] = skillInfo;
            delete tmpCards[index][userKey][skillKey];
          }
        }
      }
    }
  }

  for (const [index, userObject] of Object.entries(tmpCards)) {
    for (const [userKey, userInfo] of Object.entries(userObject)) {
      if (typeof userInfo === "object") {
        excelArray[index][userKey] = userInfo.technologyName;
        excelArray[index][`rating ${userKey.split(/(?=[A-Z])/)[0]}`] =
          userInfo.rating;
      } else {
        excelArray[index]
          ? (excelArray[index][userKey] = userInfo)
          : excelArray.push({ [userKey]: userInfo });
      }
    }
  }

  const handleExport = () => {
    let dayObj = new Date();
    let day = dayObj.getDate();
    let month = dayObj.getMonth();
    let year = dayObj.getFullYear();
    let fullDate = `${day}_${month + 1}_${year}`;

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(excelArray);
    // console.log(ws);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, `EmployeesReport_${fullDate}.xlsx`);
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
