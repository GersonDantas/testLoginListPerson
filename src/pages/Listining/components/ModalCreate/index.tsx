import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import ModalM from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Cancel from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import { Context } from "@store/context/ListiningContext";

import styles from "./styles.module.scss";
import Title from "../Title";
import { IFormCreate } from "@myGlobaltypes/index";

const Modal: React.FC = () => {
  const { handleClose, isVisibileModalCreate } = useContext(Context);
  const { register, handleSubmit } = useForm<IFormCreate>();
  async function handleCreate(data: IFormCreate) {
    console.log(data);
  }

  const [newPerson, setNewPerson] = useState();

  const theme = useTheme();
  return (
    <ModalM hideBackdrop open={isVisibileModalCreate} onClose={handleClose}>
      <div className={styles.box}>
        <IconButton className={styles.iconButtonDiv} onClick={handleClose}>
          <Cancel color="error" />
        </IconButton>
        <Grid className={styles.title}>
          <Title>Cadastre uma pessoa</Title>
        </Grid>
        <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
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
                autoFocus
                {...register("name")}
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
                {...register("surname")}
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
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("DateOfBirth")}
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
                  {...register("height")}
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
                  {...register("weight")}
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
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

export default Modal;
