import React from "react";
import { Alert } from "@mui/material";

function UpdateWarning() {
  return (
    <Alert variant="outlined" severity="warning">
      Update required!
    </Alert>
  );
}

export default UpdateWarning;
