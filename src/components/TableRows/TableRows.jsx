import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableRows = (props) => {
  // console.log("TableRows: ", props.card);
  const card = props.card;
  return (
    <>
      <TableRow
        key={card[1]}
        sx={{
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        }}
      >
        <TableCell component="th" scope="row">
          {card[0]}
        </TableCell>
        <TableCell align="right">{card[2]}</TableCell>
        <TableCell align="right">{card[3]}</TableCell>
      </TableRow>
    </>
  );
};

export default TableRows;
