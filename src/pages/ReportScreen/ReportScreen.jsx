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
import { useState } from "react";

const theme = createTheme();
const cards = [
  {
    userId: "0",
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
    userId: "1",
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
    userId: "2",
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
    userId: "3",
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

/*
http://localhost:8080/user?userId=${user.userId}&name=${user.name}&surname=${user.surname}&grade=${user.grade}&department=${user.department}
&mainTechnology[technologyName]=${user.mainTechnology.technologyName}&mainTechnology[rating]=${user.mainTechnology.rating}
&secondaryTechnology[technologyName]=${user.secondaryTechnology.technologyName}&secondaryTechnology[rating]=${user.secondaryTechnology.rating}
&cloudKnowledge[technologyName]=${user.cloudKnowledge.technologyName}&cloudKnowledge[rating]=${user.cloudKnowledge.rating}
&linuxKnowledge[technologyName]=${user.linuxKnowledge.technologyName}&linuxKnowledge[value]=${user.linuxKnowledge.value}

http://localhost:8080/user?userId=${user.userId}&name=${user.name}&surname=${user.surname}&grade=${user.grade}&department=${user.department}
&mainTechnology.technologyName=${user.mainTechnology.technologyName}&mainTechnology.rating=${user.mainTechnology.rating}
&secondaryTechnology.technologyName=${user.secondaryTechnology.technologyName}&secondaryTechnology.rating=${user.secondaryTechnology.rating}
&cloudKnowledge.technologyName=${user.cloudKnowledge.technologyName}&cloudKnowledge.rating=${user.cloudKnowledge.rating}
&linuxKnowledge.technologyName=${user.linuxKnowledge.technologyName}&linuxKnowledge.value=${user.linuxKnowledge.value}
*/
/*
http://localhost:8080/user?userId=${user.userId}&name=${user.name}&surname=${user.surname}&grade=${user.grade}&department=${user.department}
*/
// const putUser = async (user) => {
//   try {
//     await fetch(
//       `http://localhost:8080/user?userId=${user.userId}&name=${user.name}&surname=${user.surname}&grade=${user.grade}&department=${user.department}`,
//       {
//         method: "POST",
//         // body: JSON.stringify(user),
//         // headers: {
//         //   "Content-Type": "application/json",
//         // },
//       }
//     );
//   } catch (e) {
//     alert("User was not added succesfully");
//     console.log(e);
//   }
// };

// for (let user of cards) {
//   putUser(user);
// }

// console.log(excelArray);
export default function ReportsScreen() {
  // const cards = props.cards.map((card) => card);
  const [users, setUsers] = useState(cards);
  console.table(users);

  // const fetchUser = async () => {
  //   const response = await fetch(`http://localhost:8080/user/list`, {
  //     method: "GET",
  //   });
  //   const usersRsp = await response.json();
  //   setUsers(usersRsp);
  // };
  // fetchUser();
  // console.log(users);
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
        <ExportData cards={users} />
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {users &&
              users.map((user) => (
                <Grid item key={user.userId} xs={12} sm={6} md={4}>
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
                      >{`${user.name} ${user.surname}`}</Typography>

                      <Typography variant="subtitle1">{`Grade: ${user.grade}`}</Typography>
                      <Typography
                        variant="subtitle2"
                        paddingBottom="10px"
                      >{`Department: ${user.department}`}</Typography>

                      <ReportsTable cardProp={user} />
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
