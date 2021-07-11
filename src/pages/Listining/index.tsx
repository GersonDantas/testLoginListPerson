import React, { MouseEvent, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Router from "next/router";

//material-ui
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
import { IconButton } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import Copyright from "@components/Copyright";
import { Context } from "@store/context/ListiningContext";
import TableRows from "./componentsListining/TableRows";
import Header from "./componentsListining/Header";
import Title from "./componentsListining/Title";
import Modal from "./componentsListining/ModalCreate";
import useStyles from "./UseStyles";
import { getApiClient } from "@services/api/serverSide";
import { ListiningPersons } from "@services/api/persons";
import UseTables from "src/hooks/useTables";
import Pagination from "src/hooks/pagination";

const Listining: React.FC = () => {
  //global context
  const { handleOpenCreate, handleOpenUpdate, setUpdateRows, updateRows } =
    useContext(Context);
  const [fullyear, setFulyear] = useState<number>();
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonsPage, setButtonsPage] = useState({});
  const { tables, fetchTable } = UseTables(7, true);

  const handlePage = (current: number) => {
    current < 0
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);
  };

  const handleRouteChange = () => {
    let h = !refresh;
    setRefresh(h);
  };

  Router.events.on("hashChangeStart", handleRouteChange);

  useEffect(() => {
    (async () => {
      try {
        let cookies = parseCookies(undefined);
        let cP = parseInt(cookies["Leadsoft.currentPage"]);
        setCurrentPage(() => (cP > 1 ? cP : 1));
        const buttons = await Pagination(7, currentPage);
        setButtonsPage(buttons);
        await fetchTable(currentPage);
      } catch (error) {
        alert("Erro no servidor: " + error.message);
      }
    })();
    let y = new Date().getFullYear();
    setFulyear(y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, currentPage]);

  const classes = useStyles();
  return (
    <>
      {<Modal />}
      <Header />
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Grid container>
          <Grid item xs={12}>
            <Paper classes={{ root: classes.paper }}>
              <Grid
                container
                spacing={1}
                classes={{ root: classes.containerPerson }}
              >
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
                <TableHead classes={{ root: classes.headTable }}>
                  <TableRow>
                    <TableCell classes={{ root: classes.headTableCell }}>
                      Nome Completo
                    </TableCell>
                    <TableCell classes={{ root: classes.headTableCell }}>
                      Idade
                    </TableCell>
                    <TableCell classes={{ root: classes.headTableCell }}>
                      Altura
                    </TableCell>
                    <TableCell classes={{ root: classes.headTableCell }}>
                      Peso
                    </TableCell>
                    <TableCell classes={{ root: classes.headTableCell }}>
                      Imc
                    </TableCell>
                    <TableCell
                      align="right"
                      classes={{ root: classes.headTableCell }}
                    >
                      editar
                    </TableCell>
                    <TableCell
                      align="right"
                      classes={{ root: classes.headTableCell }}
                    >
                      excluir
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRows persons={tables} fullyear={fullyear} />
                </TableBody>
              </Table>
              <Grid container classes={{ root: classes.containerButtons }}>
                <Grid
                  item
                  className={
                    buttonsPage.buttonLeft
                      ? classes.buttonsPage
                      : classes.buttonsPageNone
                  }
                >
                  <IconButton onClick={() => handlePage(-1)}>
                    <KeyboardArrowLeftIcon color="primary" />
                  </IconButton>
                </Grid>
                <Grid item classes={{ root: classes.page }}>
                  página: {currentPage}
                </Grid>
                <Grid
                  item
                  className={
                    buttonsPage.buttonRight
                      ? classes.buttonsPage
                      : classes.buttonsPageNone
                  }
                >
                  <IconButton onClick={() => handlePage(1)}>
                    <KeyboardArrowRightIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Listining;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  const token = cookies["Leadsoft.Authorization"];

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
