import React from "react";
import { Alert } from "@mui/material";

function UpdateWarning() {
  return (
    <Alert data-testid="updateWarning" variant="outlined" severity="warning">
      Update required!
    </Alert>
  );
}

export default UpdateWarning;
