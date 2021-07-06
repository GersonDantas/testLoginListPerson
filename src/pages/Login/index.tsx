import React, { useState,useEffect } from "react";
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
import Copyright from "@globalComponents/Copyright";

import Image from "next/image";
import LinkN from "next/link";

import useStyles from "./UseStyles";
import { storeToken } from "@services/authorization";
import { handleLogin } from "@services/authentication";

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

  const [err, setErr] = useState("");

  useEffect(() => {
    reset()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [err])

  const seePassword = () => {
    const pass: any = document.getElementById("password");
    if (pass.type == "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(shema),
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const user = await handleLogin(data);
      console.log(user);
      storeToken(user.Authorization);
    } catch (err) {
      setErr("Dados inválidos, verifique seus dados")
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
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
          <p className={classes.error}>{errors.username?.message}</p>
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
          <p className={classes.error}>{errors.password?.message}</p>
          <FormControlLabel
            control={
              <Checkbox
                value="see"
                onClick={seePassword}
                color="primary"
              />
            }
            label="Mostrar senha"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            onClick={() => setTimeout(() => setErr(""), 2500)}
            className={classes.submit}
          >
            Login
          </Button>
          {!!err && <p className={classes.error}>{err}</p>}
          <Grid container>
            <Grid item xs>
              <Link href="#" className={classes.fake}  variant="body2">
                esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" className={classes.fake} variant="body2">
                {"não tem conta?"}
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
