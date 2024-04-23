import React, { useEffect } from "react";
import { Stack } from "@mui/material";

import { InitialBtn } from "./components";

function App() {
  useEffect(() => {
    // get current url query parametres
    const searchParams = new URLSearchParams(document.location.search);
    console.log(`${searchParams.get("appversion")}`);
  }, []);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <InitialBtn msg="Getting started" />
    </Stack>
  );
}

export default App;
