import * as React from "react";

import CardItem from "../../components/CardItem/CardItem";
import MainFooter from "../../components/MainFooter/MainFooter";

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
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
  {
    name: "Adrian",
    surname: "brisan",
    grade: "junior",
    department: "frontend development",
    mainTech: "ReactJS",
  },
];

const theme = createTheme();

const UserList = () => {
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
            gutterBottom
          >
            Employees manager
          </Typography>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((employee, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardItem employee={employee} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <MainFooter title="Your Endava Employees Manager" />
    </ThemeProvider>
  );
};

export default UserList;
