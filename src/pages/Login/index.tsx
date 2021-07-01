import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import useStyles from "src/pages/Login/UseStyles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "@components/Copyright";
import LinkN from "next/link"
import Theme from "@styles/theme";

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" classes={{
      root: classes.backgroundContainer
    }}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Image src="/img8.png" width="25" height="25" alt="logo" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
          color="primary"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="Password"
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
            color="secondary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
			<Box mt={8}>
				<Copyright />
			</Box>
      <LinkN href="Listining">
        listining
      </LinkN>
    </Container>
  );
};

export default Login;
