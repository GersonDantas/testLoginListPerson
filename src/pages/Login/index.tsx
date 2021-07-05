import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//imports material-ui
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import useStyles from "src/pages/Login/UseStyles";
import Copyright from "@globalComponents/Copyright";

import Image from "next/image";
import LinkN from "next/link";

import {storeToken} from "@services/authorization"

interface IFormInput {
  username: string;
  password: string;
}

const shema = yup.object().shape({
  username: yup
    .string()
    .email("Digite um email válido")
    .required("o campo email é obrigatório"),
  password: yup.string().required("senha obrigatória"),
});

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(shema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {console.log(data)};

  const classes = useStyles();

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={classes.backgroundContainer}
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Image src="/img8.png" width="25" height="25" alt="logo" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
          <TextField
            color="primary"
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            {...register("username")}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            {...register("password")}
            autoComplete="current-password"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remenber me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"você não tem uma conta?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <LinkN href="Listining">listining</LinkN>
    </Container>
  );
};

export default Login;
