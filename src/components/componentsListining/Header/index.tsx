import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import useStyles from "./UseStyles";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import { Logout } from "@services/api/authorization";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item xs={2} className={classes.logoContainer}>
            <Image
              src="/img7.png"
              layout="fill"
              alt="logo"
              className={classes.logo}
            />
          </Grid>
        </Grid>
        <Button onClick={() => Logout()}>
          <ExitToApp color="primary" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
