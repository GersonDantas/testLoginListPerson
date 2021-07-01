import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import useStyles from "./UseStyles";
import Image from "next/image";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="secondary">
      <Toolbar>
        <Typography variant="h6" className={classes.titleAppBar}>
          <Image src="/img7.png" width="100" height="36" alt="logo" />
        </Typography>
        <Button >
          <ExitToApp color="primary" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
