import React from "react";
import { Button } from "@mui/material";
import { InitialBtnT } from "./types";

function InitialBtn({ msg }: InitialBtnT) {
  return (
    <Button variant="outlined" sx={{ fontSize: 25 }}>
      {msg}
    </Button>
  );
}

export default InitialBtn;
