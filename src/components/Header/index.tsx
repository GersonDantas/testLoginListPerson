import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography  from "@material-ui/core/Typography";
import useStyles from "./UseStyles";

// import { Container } from './styles';

const Header: React.FC = () => {

	const classes = useStyles()

  return (
    <AppBar position="absolute" classes={{
      
    }}>
      <Toolbar>
				<Typography variant="h6" className={classes.titleAppBar}>
					
				</Typography>
			</Toolbar>
    </AppBar>
  );
};

export default Header;
