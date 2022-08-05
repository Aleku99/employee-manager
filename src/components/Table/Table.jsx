import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "../../components/TableRows/TableRows";

function ReportsTable(props) {
  // console.log("Table: ", props.cardProp);
  const card = props.cardProp;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} size="small" aria-label="Reports table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Skill</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRows
              card={[
                "Main",
                card.userId + 0,
                card.mainTechnology.technologyName,
                card.mainTechnology.rating,
              ]}
            />

            <TableRows
              card={[
                "Second",
                card.userId + 1,
                card.secondaryTechnology.technologyName,
                card.secondaryTechnology.rating,
              ]}
            />

            <TableRows
              card={[
                "Cloud",
                card.userId + 2,
                card.cloudKnowledge.technologyName,
                card.cloudKnowledge.rating,
              ]}
            />

            <TableRows
              card={[
                "Linux",
                card.userId + 3,
                card.linuxKnowledge.technologyName,
                card.linuxKnowledge.value ? "Yes" : "No",
              ]}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ReportsTable;
