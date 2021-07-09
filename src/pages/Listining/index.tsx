import React, { MouseEvent, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Router from "next/router";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

import Copyright from "@globalComponents/Copyright";
import { Context } from "@store/context/ListiningContext";
import TableRows from "./components/TableRows";
import Header from "./components/Header";
import Title from "./components/Title";
import Modal from "./components/ModalCreate";
import useStyles from "./UseStyles";
import { getApiClient } from "@services/api/serverSide";
import { ListiningPersons } from "@services/persons";


const Listining: React.FC = () => {
  const { handleOpenCreate, handleOpenUpdate, setUpdateRows, updateRows} =
    useContext(Context);
  const [fullyear, setFulyear] = useState<number>();
  const [refresh, setRefresh] = useState(false)

  const handleRouteChange = () => {
    setRefresh(!refresh)
  }

  Router.events.on('routeChangeStart', handleRouteChange)


  useEffect(() => {
    (async () => {
      try {
        const persons = await ListiningPersons();
        setUpdateRows(persons);
      } catch (error) {
        alert("Erro no servidor: " + error.message);
      }
    })();
    const y = new Date().getFullYear();
    setFulyear(y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

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
                  <TableRows 
                    persons={updateRows}
                    fullyear={fullyear}
                  />
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

  const token = cookies["Leadsoft.UserInformation"];
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
