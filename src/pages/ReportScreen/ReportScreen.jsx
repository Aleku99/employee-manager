import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReportsTable from "../../components/Table/Table";
import ExportData from "../../components/ExportData/ExportData";

const theme = createTheme();
const cards = [
  {
    userId: 0,
    name: "Ganea",
    surname: "Andreea",
    grade: "Junior",
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
      value: true,
    },
  },
  {
    userId: 1,
    name: "Popescu",
    surname: "Ion",
    grade: "Junior",
    department: "Testing",
    mainTechnology: {
      technologyName: "HTML5",
      rating: 4,
    },
    secondaryTechnology: {
      technologyName: "Python",
      rating: 3,
    },
    cloudKnowledge: {
      technologyName: "AWS",
      rating: 2,
    },
    linuxKnowledge: {
      technologyName: "Linux",
      value: true,
    },
  },
  {
    userId: 2,
    name: "Alexandrescu",
    surname: "Ionica",
    grade: "Middle",
    department: "HR",
    mainTechnology: {
      technologyName: "Speaking",
      rating: 2,
    },
    secondaryTechnology: {
      technologyName: "Excel",
      rating: 1,
    },
    cloudKnowledge: {
      technologyName: "AWS",
      rating: 1,
    },
    linuxKnowledge: {
      technologyName: "Linux",
      value: false,
    },
  },
  {
    userId: 3,
    name: "Pop",
    surname: "Maria",
    grade: "Senior",
    department: "Agile",
    mainTechnology: {
      technologyName: "Kanban",
      rating: 5,
    },
    secondaryTechnology: {
      technologyName: "Scrum",
      rating: 5,
    },
    cloudKnowledge: {
      technologyName: "AWS",
      rating: 5,
    },
    linuxKnowledge: {
      technologyName: "Linux",
      value: false,
    },
  },
];

// console.log(excelArray);
export default function ReportsScreen() {
  // const cards = props.cards.map((card) => card);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            mt: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Reports
          </Typography>
        </Container>
        <ExportData cards={cards} />
        <Container sx={{ py: 8 }}>
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
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >{`${card.name} ${card.surname}`}</Typography>

                    <Typography variant="subtitle1">{`Grade: ${card.grade}`}</Typography>
                    <Typography
                      variant="subtitle2"
                      paddingBottom="10px"
                    >{`Department: ${card.department}`}</Typography>

                    <ReportsTable cardProp={card} />
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
