import React from "react";
import Typography from "@material-ui/core/Typography";

const Title: React.FC = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="secondary" gutterBottom>
      {children}
    </Typography>
  );
};

export default Title;
