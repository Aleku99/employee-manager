import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const theme = createTheme();

const cards = [
  {
    userId: 0,
    name: "Ganea",
    surname: "Andreea",
    grade: "Developer",
    department: "Development",
    mainTechnology: {
      technologyName: "React",
      rating: 4,
    },
    secondaryTechnology: {
      technologyName: "CSS3",
      rating: 5,
    },
    cloudKnowledge: {
      technologyName: "AWS",
      rating: 2,
    },
    linuxKnowledge: {
      technologyName: "Linux",
      value: false,
    },
  },
  {
    userId: 1,
    name: "Popescu",
    surname: "Ion",
    grade: "Developer",
    department: "Development",
    mainTechnology: {
      technologyName: "React",
      rating: 4,
    },
    secondaryTechnology: {
      technologyName: "CSS3",
      rating: 5,
    },
    cloudKnowledge: {
      technologyName: "AWS",
      rating: 2,
    },
    linuxKnowledge: {
      technologyName: "Linux",
      value: false,
    },
  },
];

export default function ReportsScreen() {
  // const cards = props.cards.map((card) => card);

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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} width="50%">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.userId} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {`${card.name} ${card.surname}`}
                    </Typography>
                    <Typography variant="subtitle1">{card.grade}</Typography>
                    <Typography variant="subtitle2">
                      {card.department}
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 650 }}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>Skill</TableCell>
                            <TableCell align="right">Rating</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow
                            key={card.userId}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {card.mainTechnology.technologyName}
                            </TableCell>
                            <TableCell align="right">
                              {card.mainTechnology.rating}
                            </TableCell>
                          </TableRow>

                          <TableRow
                            key={card.userId}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {card.secondaryTechnology.technologyName}
                            </TableCell>
                            <TableCell align="right">
                              {card.secondaryTechnology.rating}
                            </TableCell>
                          </TableRow>

                          <TableRow
                            key={card.userId}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {card.cloudKnowledge.technologyName}
                            </TableCell>
                            <TableCell align="right">
                              {card.cloudKnowledge.rating}
                            </TableCell>
                          </TableRow>

                          <TableRow
                            key={card.userId}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {card.linuxKnowledge.technologyName}
                            </TableCell>
                            <TableCell align="right">
                              {card.linuxKnowledge.value}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
