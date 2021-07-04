import React, { useContext } from "react";
import ModalM from "@material-ui/core/Modal";
import { Context } from "@store/context";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";
import Cancel from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const Modal: React.FC = () => {
  const { handleOpen, handleClose, isVisibileModalSuporte } =
    useContext(Context);
  return (
    <ModalM hideBackdrop open={isVisibileModalSuporte} onClose={handleClose}>
      <div className={styles.box}>
        <IconButton className={styles.iconButtonDiv} onClick={handleClose}>
          <Cancel color="error" />
        </IconButton>
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
                id="email"
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
                id="email"
                label="Data de nascimento"
                name="DateOfBirth"
              />
            </Grid>
            <Grid container className={styles.heightWeight}>
              <Grid item xs={5}>
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
              <Grid item xs={5} >
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
          </Container>
        </form>
      </div>
    </ModalM>
  );
};

export default Modal;
