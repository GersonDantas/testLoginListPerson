//Absolutes imports
import React, { useState, useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Image from "next/image";
import router, { useRouter } from "next/router";

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

//Relatives imports
import Copyright from "@components/Copyright";
import useStyles from "./UseStyles";
import { handleLogin } from "@services/api/authentication";
import { AuthContext } from "@store/context/AuthContext";
import { SignInData } from "src/types/index";
import IsLoading from "@components/isLoading";

const Login: React.FC = () => {
  const { signIn, isLoading, setIsloading } = useContext(AuthContext);
  const [err, setErr] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<SignInData>();

  async function handleSignIn(data: SignInData) {
    try {
      setIsloading(true)
      await signIn(data);
    } catch (err) {
      setIsloading(false)
      setErr("Dados inválidos, verifique suas informações");
    }
  }

  //see password
  const seePassword = () => {
    const pass: any = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };

  useEffect(() => {
    setIsloading(false)
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [err]);

  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
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
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className={classes.form}
            >
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
                onClick={() => setErr("")}
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
                onClick={() => setErr("")}
              />
              <FormControlLabel
                control={
                  <Checkbox value="see" onClick={seePassword} color="primary" />
                }
                label="Mostrar senha"
              />
              <p className={classes.error}>{errors.password?.message}</p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
              >
                Login
              </Button>
              {!!err && <p className={classes.error}>{err}</p>}
              <Grid container>
                <Grid item xs>
                  <Link href="#" className={classes.fake} variant="body2">
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
        </Container>
      )}
    </>
  );
};

export default Login;
