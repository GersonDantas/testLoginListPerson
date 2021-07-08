import React, { MouseEvent, useContext } from "react";
import Header from "./components/Header";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Title from "./components/Title";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "src/pages/Listining/UseStyles";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import Modal from "./components/ModalCreate";
import { Context } from "@store/context/ListiningContext";
import Copyright from "@globalComponents/Copyright";
import Box from "@material-ui/core/Box";
import TableRows from "./components/TableRows";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getApiClient } from "@services/api/serverSide";

function preventDefault(event: MouseEvent) {
  event.preventDefault();
}

interface person {
  id: number;
  name: string;
  surname?: string;
  birth?: Date;
  height?: number;
  weight?: number;
}

const rows = [
  { id: 0, name: "Carlos", age: 27, height: 1.6, weight: 78.9, imc: 312.44 },
  {
    id: 1,
    name: "Maria Dantas",
    age: 27,
    height: 1.6,
    weight: 78.9,
    imc: 312.4,
  },
  {
    id: 2,
    name: "Maria souza",
    age: 27,
    height: 1.6,
    weight: 78.9,
    imc: 312.44,
  },
];

const Listining: React.FC = () => {
  const { handleOpenCreate, handleOpenUpdate, setUpdateRows} =
    useContext(Context);

  const classes = useStyles();
  return (
    <>
      {<Modal />}
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={1} className={classes.containerPerson}>
                <Grid item>
                  <Fab
                    color="secondary"
                    aria-label="add"
                    onClick={handleOpenCreate}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
                <Grid item>
                  <Title>Persons</Title>
                </Grid>
              </Grid>
              <Table size="small">
                <TableHead className={classes.headTable}>
                  <TableRow>
                    <TableCell className={classes.headTableCell}>
                      Nome Completo
                    </TableCell>
                    <TableCell className={classes.headTableCell}>
                      Idade
                    </TableCell>
                    <TableCell className={classes.headTableCell}>
                      Altura
                    </TableCell>
                    <TableCell className={classes.headTableCell}>
                      Peso
                    </TableCell>
                    <TableCell className={classes.headTableCell}>Imc</TableCell>
                    <TableCell align="right" className={classes.headTableCell}>
                      editar
                    </TableCell>
                    <TableCell align="right" className={classes.headTableCell}>
                      excluir
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRows />
                </TableBody>
              </Table>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Link href="Login">login</Link>
    </>
  );
};

export default Listining;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  const apiClient = getApiClient(ctx);

  const token = cookies["Leadsoft.UserInformation"]
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
