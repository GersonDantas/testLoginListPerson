import React, { useContext } from "react";
import ModalM from "@material-ui/core/Modal";
import { Context } from "@store/context/ListiningContext";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";
import Cancel from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import Title from "../Title";

interface Props {
  id?: number
  name?: string;
  surname?: string;
  birth?: Date;
  height?: number;
  weight?: number;
}

const ModalUpdate: React.FC<Props> = ({id, name, surname, birth, height, weight }) => {
  const { handleClose, isVisibileModalUpdate } = useContext(Context);
  const theme = useTheme();
  return (
    <ModalM hideBackdrop open={isVisibileModalUpdate} onClose={handleClose}>
      <div className={styles.box}>
        <IconButton className={styles.iconButtonDiv} onClick={handleClose}>
          <Cancel color="error" />
        </IconButton>
        <Grid className={styles.title}>
          <Title>Altere os dados de {name}</Title>
        </Grid>
        <form className={styles.form}>
          <Container className={styles.formContainer} maxWidth="xs">
            <Grid item xs={12}>
              <TextField
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="nome"
                name="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="surname"
                label="sobrenome"
                name="surname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="date"
                type="date"
                label="Data de nascimento"
                name="DateOfBirth"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid container className={styles.heightWeight}>
              <Grid item xs={12} sm={5}>
                <TextField
                  color="primary"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="altura"
                  name="height"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  color="primary"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="peso"
                  name="weight"
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={styles.buttonsContainer}
              spacing={1}
            >
              <Grid item xs={12} sm={3}>
                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.error.main,
                  }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button fullWidth variant="contained" color="secondary">
                  cadastrar
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </div>
    </ModalM>
  );
};

export default ModalUpdate;
