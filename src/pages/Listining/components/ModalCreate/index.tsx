import React, { useContext, useState } from "react";
import ModalM from "@material-ui/core/Modal";
import { Context } from "@store/context";
import styles from "./styles.module.scss";
import Button from "@material-ui/core/Button";
import Cancel from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import Title from "../Title"
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string
  surname: string
  DateOfBirth: Date
  height: number
  weight: number
}

const Modal: React.FC = () => {
  const {  handleClose, isVisibileModalCreate } =
  useContext(Context);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

export default Modal;
