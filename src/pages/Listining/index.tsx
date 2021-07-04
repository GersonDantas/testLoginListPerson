import React, { MouseEvent, useContext } from "react";
import Header from "./components/Header";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./components/Title";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "src/pages/Listining/UseStyles";
import styles from "./UseStyles/styles.module.scss";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Modal from "./components/Modal";
import { Context } from "@store/context";
import Copyright from "@globalComponents/Copyright";
import Box from "@material-ui/core/Box";
import rows from "./components/ObjMoca"



function preventDefault(event: MouseEvent) {
  event.preventDefault();
}

const Listining: React.FC = () => {
  const { handleOpen } = useContext(Context);
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
                  <Fab color="secondary" aria-label="add" onClick={handleOpen}>
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
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.height}</TableCell>
                      <TableCell>{row.weight}</TableCell>
                      <TableCell>{row.imc}</TableCell>
                      <TableCell align="right" className={classes.buttons}>
                        <IconButton onClick={() => {}}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right" className={classes.buttons}>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
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
