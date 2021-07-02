import React, { MouseEvent } from "react";
import Header from "@components/Header";
import Link from "next/link";
import LinkM from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "@components/Title";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "src/pages/Listining/UseStyles";
import styles from "./styles.module.scss";
import Image from "next/image";
import Container from "@material-ui/core/Container";

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

const Listining: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src="/img7.png" layout="fill" alt="logo" />
        </div>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Recent Orders</Title>
              <Table size="small" className={styles.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Completo</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>Altura</TableCell>
                    <TableCell>Peso</TableCell>
                    <TableCell align="right">Imc</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.height}</TableCell>
                      <TableCell>{row.weight}</TableCell>
                      <TableCell align="right">{row.imc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className={classes.seeMore}>
                <LinkM color="primary" href="#" onClick={preventDefault}>
                  See more orders
                </LinkM>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Link href="Login">login</Link>
    </>
  );
};

export default Listining;
