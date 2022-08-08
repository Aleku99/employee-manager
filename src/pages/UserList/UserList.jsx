import * as React from "react";

import Button from "../../components/Button/Button";
import CardItem from "../../components/CardItem/CardItem";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import Modal from "../../components/Modal/Modal";

import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Alex",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Marian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Andrei",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Andreea",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Bianca",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Bujor",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Mercedesa",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Pyush",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
];

const theme = createTheme();

const UserList = ({ filterSearch, handleUserSkill }) => {
  const [employeeList, setEmployeeList] = React.useState(cards);
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
          >
            Employees manager
          </Typography>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Button
            style={{ marginBottom: "4rem" }}
            disableElevation
            type="submit"
            text="Add Employee Profile"
            onClick={() => setOpenModal(true)}
          />
          <Grid container spacing={4}>
            {employeeList
              .filter((employee) =>
                `${employee.name.toLowerCase()} ${employee.surname.toLowerCase()}`.includes(
                  filterSearch.toLowerCase()
                )
              )
              .map((employee, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardItem
                      employee={employee}
                      handleUserSkill={handleUserSkill}
                    />
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      <Modal
        title="Add Employee Profile"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <EmployeeForm type="addEmployee" addOrEdit={() => {}} />
      </Modal>
    </ThemeProvider>
  );
};

export default UserList;
