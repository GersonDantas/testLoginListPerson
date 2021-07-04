import React, { MouseEvent ,  useContext } from "react";
import Header from "src/pages/Listining/Header";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "src/pages/Listining/Title";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "src/pages/Listining/UseStyles";
import styles from "./UseStyles/styles.module.scss";
import styled from "@material-ui/core/styles/styled";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "./Modal";
import { Context } from '@store/context';


function createPerson(
  id: number,
  name: string,
  age: number,
  height: number,
  weight: number,
  imc: number
) {
  return { id, name, age, height, weight, imc };
}

const rows = [
  createPerson(0, "Carlos", 27, 1.6, 78.9, 312.44),
  createPerson(1, "Maria Dantas", 27, 1.6, 78.9, 312.44),
  createPerson(2, "Maria souza", 27, 1.6, 78.9, 312.44),
];

function preventDefault(event: MouseEvent) {
  event.preventDefault();
}

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: 90,
  right: 20,
  margin: "0 auto",
});

const Listining: React.FC = () => {
  const { handleOpen } = useContext(Context);
  const classes = useStyles();
  return (
    <>
    {<Modal />}
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={handleOpen}
          >
            <AddIcon />
          </StyledFab>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Persons</Title>
              <Table size="small" className={styles.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Completo</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>Altura</TableCell>
                    <TableCell>Peso</TableCell>
                    <TableCell>Imc</TableCell>
                    <TableCell align="right" className={styles.buttons}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right" className={styles.buttons}>
                      <IconButton>
                        <Delete />
                      </IconButton>
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
                      <TableCell align="right" className={styles.buttons}>
                        <IconButton>
                          <Checkbox />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right" className={styles.buttons}>
                        <IconButton>
                          <Checkbox />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Link href="Login">login</Link>
    </>
  );
};

export default Listining;
